import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  Box,
  Input,
  Button,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import ImagePicker from 'react-native-image-picker';
import { getData } from "../utils";
import { COLORS, FONTS } from "../constants";
import { updateUser } from "../actions/action";
import { TouchableOpacity } from "react-native";
import {
  ref as rtdbRef,
  update as rtdbUpdate,
} from 'firebase/database';
import {
  doc as firestoreDoc,
  updateDoc as firestoreUpdateDoc,
} from 'firebase/firestore';
import {
  getStorage,
  ref as storageRef,
  uploadString,
  getDownloadURL,
} from 'firebase/storage';
import { FIREBASE } from '../config/FIREBASE';
import { encode, decode } from 'base-64';


const EditProfile = ({ route, navigation }) => {
  const { nama: initialNama, email: initialEmail, nohp: initialNohp, uid } =
    route.params || {};
  const [nama, setNama] = useState(initialNama || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [nohp, setNohp] = useState(initialNohp || "");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const getUserData = async () => {
    try {
      const data = await getData("user");
      if (data) {
        console.log("isi data", data);
        setNama(data.nama);
        setEmail(data.email);
        setNohp(data.nohp);
        setProfileImage(data.profilepicture);
      } else {
        // Handle the case where user data is not available
        // navigation.replace('Login');
      }
    } catch (error) {
      console.error('Error fetching user data', error.message);
    }
  };

  const pickImage = async () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        allowsEditing: true,
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          setProfileImage(response.uri);
        }
      }
    );
  };
  

  const onEditUser = async () => {
    if (nama && email && nohp) {
      try {
        let data = {
          nama: nama,
          email: email,
          nohp: nohp,
        };
  
        if (profileImage) {
          // Fetch image data
          const imageResponse = await fetch(profileImage);
          const imageBlob = await imageResponse.blob();
  
          // Upload the new profile picture to Firebase Storage
          const storage = getStorage(FIREBASE);
          const storagePath = `user/photos/${uid}`;
          const storageReference = storageRef(storage, storagePath);
          await uploadString(storageReference, imageBlob, 'data_url');
  
          // Get the download URL of the uploaded image
          const downloadURL = await getDownloadURL(storageReference);
  
          // Update the user's profile picture URL in Realtime Database
          const dbRef = rtdbRef(FIREBASE.database(), `users/${uid}`);
          await rtdbUpdate(dbRef, { profilepicture: downloadURL });
  
          // Update the data object with the new profile picture URL
          data = { ...data, profilepicture: downloadURL };
        }
  
        // Update the user document in Firestore
        await firestoreUpdateDoc(
          firestoreDoc(FIREBASE.firestore(), 'users', uid),
          data
        );
  
        navigation.goBack();
      } catch (error) {
        console.error('Error', error.message);
        // Handle the error accordingly
      }
    } else {
      console.error('Error', 'Data tidak lengkap');
      // Handle the error accordingly
    }
  };
  
  

  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <Box
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
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 0, padding: 20 }}
          />
          <Text style={{ ...FONTS.h3 }}>Edit Profile</Text>
        </Box>

        <Box alignItems="center" marginVertical={25}>
          <TouchableOpacity onPress={pickImage}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={{
                  height: 170,
                  width: 170,
                  borderRadius: 85,
                  borderWidth: 2,
                  borderColor: COLORS.primary,
                }}
              />
            ) : (
              <Button colorScheme="primary">
                <Text>Select Profile Picture</Text>
              </Button>
            )}
          </TouchableOpacity>
        </Box>

        <Box w="100%">
          <Text mb={3} bold fontSize="lg">
            Name
          </Text>
          <Input
            w="100%"
            h={35}
            value={nama}
            placeholder="Input Your Name"
            mb={5}
            onChangeText={(nama) => setNama(nama)}
          />
        </Box>

        <Box w="100%">
          <Text mb={3} bold fontSize="lg">
            Email
          </Text>
          <Input
            w="100%"
            h={35}
            value={email}
            placeholder="Input Your Email"
            mb={5}
            onChangeText={(email) => setEmail(email)}
          />
        </Box>

        <Box w="100%">
          <Text mb={3} bold fontSize="lg">
            Nomor HP
          </Text>
          <Input
            w="100%"
            h={35}
            value={nohp}
            placeholder="Input Your Phone Number"
            mb={5}
            onChangeText={(nohp) => setNohp(nohp)}
          />
        </Box>

        <Box alignItems="center">
          <Button onPress={onEditUser} colorScheme="primary">
            <Text>Save Change</Text>
          </Button>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default EditProfile;
