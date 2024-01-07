import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Box, HStack, Heading, Text as NText, Stack, TextArea, Image, Center, VStack, Button, Divider, Radio } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Banner, BookCard, Category, Gap, Header, Input, Section } from '../components';

const Payment = ({ navigation }) => {
    const [Value, setValue] = useState('false');
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

        <Text style={{ ...FONTS.h3 }}>Payment</Text>
        </View>

        {/* ISI */}
        <Box mt={5} ml={5}>
        <Heading size={"sm"}>Products Details</Heading>
        <Divider>
        </Divider>
        <HStack space={2} justifyContent="flex-start" mt={20}>
        <Center h="40" w="40" shadow={3}>
        <Image source={{
                uri: "https://i.pinimg.com/564x/d2/d9/30/d2d9306df7f3c37b25351665eeefd669.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={10} />
        </Center>
        <VStack>
        <Text style={{...FONTS.h5}} >MISERY by Stephen King</Text>
        <Text>
            1 x Rp 50.000
        </Text>
        </VStack>
        </HStack>
        </Box>

        <Box mt={20} marginHorizontal={20}>
            <Box backgroundColor={"#F4F4F7"} p={2}>
              <HStack>
                <Ionicons name="card-outline" size={25} />
                <NText fontSize={16} fontWeight={"medium"} ml={8}>ATM Card</NText>
              </HStack>
            </Box>
            <Box borderColor={"#F4F4F7"} backgroundColor={"#FFFF"} p={2}>
              <HStack>
              <Radio.Group defaultValue="card1" name="card" size="sm">
              <VStack space={3}>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="card1">
                  Mandiri
                </Radio>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="card2">
                  BCA
                </Radio>
              </VStack>
            </Radio.Group>
              </HStack>
            </Box>
            <Box>
            <Button onPress={() => console.log("hello world")}>Click Me</Button>
            </Box>
        </Box>
    </SafeAreaView>
    );
};

export default Payment;
