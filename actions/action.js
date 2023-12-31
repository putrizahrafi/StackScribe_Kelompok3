import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils/localStorage";

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
