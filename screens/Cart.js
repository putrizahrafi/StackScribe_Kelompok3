import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Box, HStack, Heading, Text as NText, Stack, TextArea, Image, Center, VStack, Button } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Banner, BookCard, Category, Gap, Header, Input, Section } from '../components';

const Cart = ({ navigation }) => {
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

        <Text style={{ ...FONTS.h3 }}>Cart</Text>
        </View>

        <ScrollView w={["200", "300"]} h="80">
        <HStack space={2} justifyContent="flex-start" marginLeft={5} marginTop={10} > 
        <Center h="200" w="130" shadow={3}>
        <Image source={{
                uri: "https://i.pinimg.com/564x/a3/23/f9/a323f9054c7f21e3f89780ebac0936c9.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={10} />
        </Center>
        <VStack>
        <Heading>UNSEEN WORLD</Heading>
        <Text>
            Penulis : Jamilla Francis
        </Text>
        <Text>
            Kategori : Slice Of Life
        </Text>
        <Text>
            Harga : Rp 55.000
        </Text>
        <Button marginTop={15} backgroundColor={'#11235A'} h={10} w={100}
        onPress={() => console.log("hello world")}>Checkout</Button>
        </VStack>
        </HStack>

        {/* ==================BATAS==================== */}

        <HStack space={2} justifyContent="flex-start" marginLeft={5} marginTop={90}>
        <Center h="200" w="130" shadow={3}>
        <Image source={{
                uri: "https://i.pinimg.com/736x/82/eb/cf/82ebcf8435a2d403014064eee495d8f2.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={10} />
        </Center>
        <VStack>
        <Heading size={'md'}>PRIDE AND PREJUDICE </Heading>
        <Text>
            Penulis : Jamilla Francis
        </Text>
        <Text>
            Kategori : Slice Of Life
        </Text>
        <Text>
            Harga : Rp 55.000
        </Text>
        <Button marginTop={15} backgroundColor={'#11235A'} h={10} w={100}
        onPress={() => console.log("hello world")}>Checkout</Button>
        </VStack>
        </HStack>

        {/* ==================BATAS==================== */}

        <HStack space={2} justifyContent="flex-start" marginLeft={5} marginTop={90}>
        <Center h="200" w="130" shadow={3}>
        <Image source={{
                uri: "https://i.pinimg.com/564x/58/ed/3e/58ed3e68bd5b5aa7cc86254b731e8d0c.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={10} />
        </Center>
        <VStack>
        <Heading>LOST BOY</Heading>
        <Text>
            Penulis : Christina Henry
        </Text>
        <Text>
            Kategori : Fantasi
        </Text>
        <Text>
            Harga : Rp 55.000
        </Text>
        <Button marginTop={15} backgroundColor={'#11235A'} h={10} w={100}
        onPress={() => console.log("hello world")}>Checkout</Button>
        </VStack>
        </HStack>

        {/* ==================BATAS==================== */}

        <HStack space={2} justifyContent="flex-start" marginLeft={5} marginTop={90} marginBottom={10}>
        <Center h="200" w="130" shadow={3}>
        <Image source={{
                uri: "https://i.pinimg.com/564x/d2/d9/30/d2d9306df7f3c37b25351665eeefd669.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={10} />
        </Center>
        <VStack>
        <Heading>MISERY</Heading>
        <Text>
            Penulis : Stephen King
        </Text>
        <Text>
            Kategori : Mistery
        </Text>
        <Text>
            Harga : Rp 55.000
        </Text>
        <Button marginTop={15} backgroundColor={'#11235A'} h={10} w={100}
        onPress={() => navigation.navigate('Payment')}>Checkout</Button>
        </VStack>
        </HStack>

        </ScrollView>
    </SafeAreaView>
    );
};

export default Cart;
