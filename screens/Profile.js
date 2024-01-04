import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Heading } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome5';


const Profile = () => {
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
            uri: 'https://images.unsplash.com/photo-1698778573682-346d219402b5?auto=format&fit=crop&q=80&w=1318&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
          source={images.profile}
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
          Putri Zahrafi Anam
        </Heading>

        <Text marginBottom="2">
          pzahrafianam@gmail.com
        </Text>

          <Text italic>
            A girl who love nature and carried by the wind
          </Text>

          <Text marginTop="2" bold><MaterialIcons name="location-on" size={18} color="black" marginTop="" />
            Surabaya, Indonesia
          </Text>
        <View style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 20, Bottom: 20}}>
                            <TouchableOpacity
                            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="instagram" size={25} color="#bdbdbd" />
                            </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="github" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="twitter" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="linkedin" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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