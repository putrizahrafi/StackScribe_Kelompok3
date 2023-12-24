import { View, TouchableOpacity, Image } from 'react-native';
import { Box, Badge, TextArea, NativeBaseProvider,Text, Stack, Button } from "native-base";
import React, { useState } from "react";
import { COLORS, FONTS, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const EditProfile = ({ navigation }) => {
  const [textAreaValue, setTextAreaValue] = useState("Input your name");

  return (
  <NativeBaseProvider>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
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
        <Text style={{ ...FONTS.h3 }}>Edit Profile</Text>
      </View>

      <View
          style={{
            alignItems: "center",
            marginVertical: 25,
          }}
        >
            <Image
              source={images.profile}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />
        </View>
      <Box
      alignItems="center" 
      w="100%">
      <Stack space={2.5} w="100%" maxW="320">
        <Box>
          <Text mb="3" bold fontSize="lg" >
            Name
          </Text>
          <TextArea w="100%" h="35" aria-label="t1" numberOfLines={4} placeholder="Input Your Name"
        mb="5" />
        </Box>
      </Stack>
      </Box>

      <Box
      alignItems="center" 
      w="100%">
      <Stack space={2.5} w="100%" maxW="320">
        <Box>
          <Text mb="3" bold fontSize="lg" >
            Email
          </Text>
          <TextArea w="100%" h="35" aria-label="t1" numberOfLines={4} placeholder="Input Your Email"
        mb="5" />
        </Box>
      </Stack>
      </Box>

      <Box
      alignItems="center" 
      w="100%">
      <Stack space={2.5} w="100%" maxW="320">
        <Box>
          <Text mb="3" bold fontSize="lg" >
            Bio
          </Text>
          <TextArea w="100%" h="35" aria-label="t1" numberOfLines={4} placeholder="Input Your Bio"
        mb="5" />
        </Box>
      </Stack>
      </Box>

      <Box
      alignItems="center" 
      w="100%">
      <Stack space={2.5} w="100%" maxW="320">
        <Box>
          <Text mb="3" bold fontSize="lg" >
            City and Country
          </Text>
          <TextArea w="100%" h="35" aria-label="t1" numberOfLines={4} placeholder="Input Your City and Country"
        mb="5" />
        </Box>
      </Stack>
      </Box>

      <Box alignItems="center">
        <Button onPress={() => console.log("")} colorScheme= "primary">
          <Text>Save Change</Text>
        </Button>
      </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default EditProfile;
// exportdefault EditProfile