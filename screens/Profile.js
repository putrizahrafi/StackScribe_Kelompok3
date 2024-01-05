import { View, Image, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Heading } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { getData, clearStorage } from "../utils/localStorage";
import FIREBASE from "../config/FIREBASE";
import Icon from "react-native-vector-icons/FontAwesome5";

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
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

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.goBack(); // Go back to the previous screen (Settings)
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.goBack(); // Go back to the previous screen (Settings)
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
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1698778573682-346d219402b5?auto=format&fit=crop&q=80&w=1318&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            resizeMode="cover"
            style={{
              height: 300,
              width: "100%",
            }}
          />
        </View>
        
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={{uri: "https://firebasestorage.googleapis.com/v0/b/stackedscribe.appspot.com/o/user%2Fphotos%2Fbababoey.jpg?alt=media&token=60010b5c-5622-41c7-93ba-9ef7e23428c1"}}
            resizeMode="contain"
            style={{
              height: 155,
              width: 155,
              borderRadius: 999,
              borderColor: COLORS.primary,
              borderWidth: 2,
              marginTop: -90,
            }}
          />

          <Heading size="lg" marginTop="4" fontSize={30} bold>
            {profile?.nama}
          </Heading>

          <Text italic>{profile?.email}</Text>

          <Text marginTop="2" bold>
            <MaterialIcons
              name="location-on"
              size={18}
              color="black"
              marginTop=""
            />
            Surabaya, Indonesia
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 60,
              marginHorizontal: 20,
              Bottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              title={profile ? "Logout" : "Login"}
              onPress={() => onSubmit(profile)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Icon name="github" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="twitter" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="linkedin" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="whatsapp" size={25} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Profile;
// export default profile