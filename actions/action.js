import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils/localStorage";
import { collection, doc, getDocs, setDoc, updateDoc, getDoc} from "firebase/firestore";

export const registerUser = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(
      data.email,
      password
    );

    const dataBaru = {
      ...data,
      uid: success.user.uid,
    };

    await FIREBASE.database()
      .ref("users/" + success.user.uid)
      .set(dataBaru);
    //Local storage(Async Storage)
    storeData("user", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};


export const getUserDetails = async () => {
  try {
    const userData = await getData("user");
    const userRef = FIREBASE.database().ref("users/" + userData.uid);

    return userRef
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        return null;
      });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const updateUser = async (uid, newData) => {
  try {
    await FIREBASE.database().ref(`/users/${uid}`).update(newData);
    return true;
  } catch (error) {
    console.error("Error updating user details:", error);
    return false;
  }
};

export const fetchPopularBooks = async () => {
  try {
    const booksRef = collection(FIREBASE.firestore(), 'books');
    const booksSnapshot = await getDocs(booksRef);

    const popularBooks = [];
    booksSnapshot.forEach((doc) => {
      const bookData = doc.data();
      const bookWithImage = {
        ...bookData,
        id: doc.id, // Add the 'id' field to the book object
        imageUrl: bookData.imageUrl,
      };
      popularBooks.push(bookWithImage);
    });

    return popularBooks;
  } catch (error) {
    console.error('Error fetching popular books:', error);
    throw error;
  }
};

export const getBookDetails = async (bookId) => {
  try {
    const snapshot = await FIREBASE.firestore().collection('books').doc(bookId).get();
    const bookData = snapshot.data();
    return {
      ...bookData,
      id: snapshot.id,
    };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(
      email,
      password
    );
    const resDB = await FIREBASE.database()
      .ref("/users/" + success.user.uid)
      .once("value");

    if (resDB.val()) {
      // Local storage (Async Storage)
      await storeData("user", resDB.val());
      return resDB.val();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage();
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};

export const addToCart = async (userUid, bookId, quantity) => {
  try {
    // Get a reference to the user's cart document
    const cartRef = doc(FIREBASE.firestore(), `carts/${userUid}`);

    // Check if the cart document already exists
    const cartDoc = await getDoc(cartRef);

    if (!cartDoc.exists()) {
      // If it doesn't exist, create a new cart document
      await setDoc(cartRef, {});
    }

    // Fetch the existing cart data
    const existingCart = cartDoc.data() || {};

    // Check if the book already exists in the cart
    if (existingCart[bookId]) {
      // If it does, update the quantity
      existingCart[bookId].quantity += quantity;
    } else {
      // If not, add a new entry for the book
      existingCart[bookId] = { quantity };
    }

    // Update the cart data in Firestore
    await updateDoc(cartRef, existingCart);

    console.log('Book added to cart:', bookId);

    return true;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const getUserCart = async (userUid) => {
  try {
    const userCartRef = FIREBASE.firestore().collection("carts");
    const userCartQuery = userCartRef.where("userId", "==", userUid);

    const userCartData = await userCartQuery.get().then((querySnapshot) => {
      const cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push({ id: doc.id, ...doc.data() });
      });
      return cartItems;
    });

    return userCartData;
  } catch (error) {
    throw error;
  }
};