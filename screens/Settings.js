import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Box, HStack, Heading, Text as NText } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import {Gap} from '../components';

const Settings = ({ navigation }) => {
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

        {/* SUPPORT AND ABOUT */}
        <Box mt={5}>
          <Heading size={"md"}>Support and About</Heading>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="help-circle-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Help & Support</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
          <Gap height={8} />
          <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="information-circle-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>Terms and Policies</NText>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* UTILS */}

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
