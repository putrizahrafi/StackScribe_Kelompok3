import React, { useState, useEffect } from "react";
import { Box, Text, VStack, ScrollView, Image, Button } from "native-base";
import { clearStorage, getData } from "../utils";
import FIREBASE from "../config/FIREBASE";

const Popular = ({ navigation }) => {
    const [popular, setPopular] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setPopular(data);
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

  const onSubmit = (popular) => {
    if (popular) {
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

    <Box mt={5} mx={5} backgroundColor="blueGray.100" flex={1} marginTop={20} flexDirection="column">
      <ScrollView>
        <VStack backgroundColor="blueGray.100" width="full" mb={10}>
          <Image source={require("../assets/images/hero1.jpg")} size="2xl" borderRadius="full" alignSelf="center" alt="Foto Profil" />
          <Text fontSize="xl" alignSelf="center" marginTop={5} fontWeight="bold">
          {popular?.nama}
          </Text>
        </VStack>
        <Box flexDirection="column" bgColor="white" shadowColor="black" shadowOffset={{ width: 0, height: 2 }} shadowOpacity={0.25} shadowRadius={3.5} justifyContent="space-evenly" p={5} borderRadius="xl">
          <Text color="black" fontWeight="bold" fontSize="xl">
            Data Diri
          </Text>
          <Box mt={5}>
            <Text color="black" fontSize="sm">
              Email
            </Text>
            <Text color="black" fontSize="xl" mt={2}>
              {popular?.email}
            </Text>
          </Box>
          <Box mt={5}>
            <Text color="black" fontSize="sm">
              Nomor Ponsel
            </Text>
            <Text color="black" fontSize="xl" mt={2}>
              +62 {popular?.nohp}
            </Text>
          </Box>
        </Box>
        <Box alignItems="center">
      <     Button w={"100%"} borderRadius={20} onPress={() => console.log("hello world")}>Click Me</Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Popular;
