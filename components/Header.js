import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading } from 'native-base';
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { clearStorage, getData } from "../utils";
import FIREBASE from "../config/FIREBASE";

const Header = () => {
  const navigation = useNavigation();
  const [header, setHeader] = useState(null);

  const handleCartPress = () => {
    // Navigate to the Cart screen
    navigation.navigate('Cart');
  };

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setHeader(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = (header) => {
    if (header) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("MainApp");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <Box>
      <HStack alignItems={"center"} space={2} justifyContent={"space-between"}>
        <Heading size={"md"} color={"#001B79"}>Hai, {header?.nama}</Heading>
        <TouchableOpacity onPress={handleCartPress}>
          <Ionicons name="cart-outline" size={28} color={"#001B79"} />
        </TouchableOpacity>
      </HStack>
    </Box>
  )
}

export default Header;