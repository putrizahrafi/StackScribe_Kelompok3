import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Image, VStack, HStack, Heading, Box } from "native-base";
import { COLORS, FONTS } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import FIREBASE, { storage } from "../config/FIREBASE";
import { Ionicons } from "@expo/vector-icons";
import { Gap } from "../components";
import { getUserDetails, getBookDetails } from "../actions/action";
import { Modal } from "native-base";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userUid, setUserUid] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const { quantity, details } = item;
      const bookPrice = details?.price || 0; // Ensure that price is available, default to 0
      totalPrice += quantity * bookPrice;
    });

    return totalPrice;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserDetails();
        if (userData && userData.uid) {
          setUserUid(userData.uid);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userUid) {
      const fetchCartData = async () => {
        try {
          const cartRef = doc(FIREBASE.firestore(), `carts/${userUid}`);
          const cartDoc = await getDoc(cartRef);

          if (cartDoc.exists()) {
            const cartData = cartDoc.data();
            const cartItemsArray = Object.entries(cartData).map(
              async ([bookId, item]) => {
                const bookDetails = await getBookDetails(bookId);
                return {
                  bookId,
                  quantity: item.quantity,
                  details: bookDetails,
                };
              }
            );

            Promise.all(cartItemsArray).then((resolvedItems) => {
              setCartItems(resolvedItems);
            });
          } else {
            setCartItems([]);
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };

      fetchCartData();
    }
  }, [userUid]);

  const removeItemFromCart = async (index, bookId) => {
    try {
      // Create a copy of the cart items
      const updatedCartItems = [...cartItems];

      // Remove the item at the specified index
      updatedCartItems.splice(index, 1);

      // Update the cart items state
      setCartItems(updatedCartItems);

      // Update the cart data in Firestore
      const cartRef = doc(FIREBASE.firestore(), `carts/${userUid}`);
      const updatedCartData = updatedCartItems.reduce((acc, item) => {
        acc[item.bookId] = { quantity: item.quantity };
        return acc;
      }, {});
      await setDoc(cartRef, updatedCartData);

      console.log("Item removed from cart:", bookId);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddPhoto = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      // Upload the selected image to Firebase Storage
      const imageName = `${userUid}_Payment_confirm.jpg`;
      const storageRef = storage().ref(`payment_confirm/${imageName}`);
      const task = storageRef.putFile(image.path);

      task.on(
        'state_changed',
        (snapshot) => {
          // Track the upload progress if needed
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        () => {
          // Image uploaded successfully
          console.log('Image uploaded successfully');
        }
      );
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const renderCheckoutModal = () => {
    return (
      <Modal isOpen={showModal} onClose={toggleModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Checkout</Modal.Header>
          <Modal.Body>
            <Text fontSize="lg" fontWeight="bold">
              Total Harga: Rp {calculateTotalPrice()}
            </Text>
            <Text marginTop={2}>Transfer to Bank Account: 1234-5678-9012</Text>
            <Text marginTop={2}>Upload your transfer receipt:</Text>
            <Button
              marginTop={2}
              backgroundColor={"#11235A"}
              onPress={handleAddPhoto} // Handle adding a photo
            >
              Add Photo
            </Button>
            <Button
              marginTop={2}
              backgroundColor={"#11235A"}
              onPress={handleConfirmCheckout} // Handle confirming checkout
            >
              Confirm
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  };

  const handleConfirmCheckout = async () => {
    try {
      // Clear the user's cart in Firestore
      const cartRef = doc(FIREBASE.firestore(), `carts/${userUid}`);
      await updateDoc(cartRef, {});
  
      // Close the modal and update the UI as needed
      setShowModal(false);
      setCartItems([]);
      console.log('Checkout confirmed! Cart cleared.');
    } catch (error) {
      console.error('Error confirming checkout:', error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* button biru settings */}
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          backgroundColor: COLORS.blue,
          padding: 20,
          borderRadius: 20,
        }}
      >
        {/* tombol untuk kembali */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
            padding: 20,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Cart</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: 20,
        }}
      >
        {cartItems.length > 0 ? (
          <ScrollView>
            {cartItems.map((item, index) => (
              <HStack
                key={item.bookId}
                space={2}
                justifyContent="flex-start"
                marginBottom={10}
              >
                {/* Fetch book details dynamically */}
                <Image
                  source={{ uri: item.details?.cover }}
                  alt="Book Image"
                  size="md"
                  borderRadius={10}
                />
                <VStack>
                  <Heading>{item.details?.title}</Heading>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Rp . {item.details?.price}</Text>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(index, item.bookId)}
                  >
                    <Ionicons name="trash-outline" size={24} color="red" />
                  </TouchableOpacity>
                </VStack>
              </HStack>
            ))}
          </ScrollView>
        ) : (
          <Text>Your cart is empty.</Text>
        )}

        <Box marginTop={3} marginLeft={5}>
          <Text fontSize="lg" fontWeight="bold">
            Total Harga: Rp {calculateTotalPrice()} {/* Display total price */}
          </Text>
        </Box>

        <Button
          marginTop={10}
          backgroundColor={"#11235A"}
          onPress={toggleModal}
        >
          Proceed to Checkout
        </Button>
        {renderCheckoutModal()}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
