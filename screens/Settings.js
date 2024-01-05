import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Box, HStack, Heading, Text as NText } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import FIREBASE from "../config/FIREBASE";
import { getData, clearStorage } from "../utils/localStorage";
import {Gap} from '../components';
import { getUserDetails } from "../actions/action";

const Settings = ({ navigation }) => {
  const navigateToEditProfile = async () => {
    try {
      // Fetch user profile data (replace with your actual method to fetch user data)
      const profile = await getUserDetails();
  
      if (profile) {
        navigation.navigate("EditProfile", {
          nama: profile?.nama,
          email: profile?.email,
          nohp: profile?.nohp,
          uid: profile?.uid,
        });
      } else {
        // Handle the case where user data is not available
        console.error("User data not available");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
      // Handle the error accordingly
    }
  };
  

  const navigateToSupport = () => {
    console.log("Support function");
  };

  const navigateToTermsAndPolicies = () => {
    console.log("Terms and Policies function");
  };

  const logout = () => {
    console.log("Logout");
  };

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("Login");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("Login");
    }
  };

  const accountItems = [
    {
      icon: "person-outline",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
  ];

  const supportItems = [
    { icon: "help-outline", text: "Help & Support", action: navigateToSupport },
    {
      icon: "info-outline",
      text: "Terms and Policies",
      action: navigateToTermsAndPolicies,
    },
  ];

  const actionsItems = [
    { icon: "logout", text: "Log out", action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

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
            padding: 20
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Settings</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>

        {/* ACCOUNT */}
        <Box mt={5}>
          <Heading size={"md"}>Account</Heading>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="person-circle-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Edit Profile</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* ACCOUNT */}
        <Box mt={5}>
          <Heading size={"md"}>Account</Heading>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="person-circle-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Edit Profile</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* Support and About settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>
            Support & About{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            <TouchableOpacity onPress={onSubmit}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="log-out-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Logout</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
          </View>
        </View>

        <Box mt={5}>
          <Heading size={"md"}>Utils</Heading>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="call-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Contact Us</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
          <Gap height={8} />
          <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="book-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Guide</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* ACTIONS */}

        <Box mt={5}>
          <Heading size={"md"}>Actions</Heading>
          <TouchableOpacity onPress={() => console.log('log out')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="log-out-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Log Out</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* ACTIONS */}

        <Box mt={5}>
          <Heading size={"md"}>Actions</Heading>
          <TouchableOpacity onPress={() => console.log('log out')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="log-out-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Log Out</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
