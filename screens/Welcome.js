import { View, Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Box, HStack, Heading, Text as NText } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Gap} from '../components';

const Welcome = ({ navigation }) => {

  return (
    <LinearGradient
        style={{
            flex: 1
        }}
        colors={[color= "white", color= "#5c9aea"]}
    >
        <View style={{ flex: 1}}>
            <View>
                <Image
                    source={require("../assets/images/Logo.png")}
                    style={{
                        height: 300,
                        width: 300,
                        borderRadius: 20,
                        position: "absolute",
                        top: 150,
                        left: 40,
                    }}
                />
            </View>
            
            <View style={{
                paddingHorizontal: 25,
                position: "absolute",
                top: 450,
                width: "100%"
            }}>
                <Heading size="lg" fontSize={50} bold color="#001B79">
                    Welcome To Stack Scribe
                </Heading>

                <Box mt={5}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Box backgroundColor={"#001B79"} p={2} w={150} h={50} borderRadius={10}>
                    <HStack>
                        <NText color={'white'} fontSize={16} fontWeight={"medium"} ml={8}>Join Now!</NText>
                    </HStack>
                    </Box>
                </TouchableOpacity>
                </Box>
        </View>
        </View>
    </LinearGradient>
  );
};

export default Welcome