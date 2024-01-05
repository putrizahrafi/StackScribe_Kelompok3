import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  Box,
  HStack,
  Heading,
  Text as NText,
  Stack,
  TextArea,
  Button,
  Image,
  Center,
  VStack,
  Modal,
  showModal,
  showModal2,
  Radio,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { getBookDetails, addToCart, getUserDetails } from "../actions/action";


const Detailbuku1 = ({ route, navigation }) => {
  const { bookId } = route?.params || {};
  const [bookDetails, setBookDetails] = useState(null);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    if (bookId) {
      const fetchBookDetails = async () => {
        try {
          const details = await getBookDetails(bookId);
          setBookDetails(details);
        } catch (error) {
          console.error("Error fetching book details:", error);
        }
      };

      fetchBookDetails();
    }
  }, [bookId]);

  useEffect(() => {
    const fetchUserUid = async () => {
      try {
        const userDetails = await getUserDetails();
        if (userDetails && userDetails.uid) {
          setUserUid(userDetails.uid);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserUid();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleAddToCart = async () => {
    try {
      if (userUid && bookDetails) {
        const quantity = 1; // You can modify this as needed
        await addToCart(userUid, bookDetails.id, quantity);
        setShowModal(true); // Show success modal or perform any other actions
      } else {
        console.error("User ID or book details not available");
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error, show error message, etc.
    }
  };

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
            padding: 20,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Detail Buku</Text>
      </View>

      <ScrollView w={["200", "300"]} h="80">
        <Box style={{ backgroundColor: "#FFFFrrFF", flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
          <Box p={3}></Box>
          <Image
            source={{ uri: bookDetails?.cover }}
            alt="Alternate Text"
            size="2xl"
            borderRadius={20}
            width={150}
            height={220}
          />
          <Heading size="lg">{bookDetails?.title}</Heading>
          <Text size="lg">{bookDetails?.author}</Text>
          <Text>{bookDetails?.genre}</Text>
        </Box>
        <Box>
          <Center mt="3" mb="4">
            <Heading fontSize="xl">Sinopsis</Heading>
          </Center>
          <VStack flex="1">
            <Text marginHorizontal={20}>{bookDetails?.synopsis}</Text>
          </VStack>
        </Box>
      </ScrollView>
      <Button
        marginHorizontal={70}
        marginTop={10}
        marginBottom={3}
        backgroundColor={"#9BB8CD"}
        onPress={handleAddToCart}
      >
        Add To Cart
      </Button>
      <Button
        marginHorizontal={70}
        marginBottom={10}
        backgroundColor={"#11235A"}
        onPress={() => setShowModal(true)}
      >
        Checkout
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="center">
                <Ionicons name="checkmark-circle-outline" size={60} color={"green"} />
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Text fontWeight="medium">Item Berhasil Ditambah ke Keranjang</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              backgroundColor={"#11235A"}
              onPress={() => {
                setShowModal(false);
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Select Address</Modal.Header>
          <Modal.Body>
            <Radio.Group defaultValue="address1" name="address" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: "-1",
                    ml: "2",
                    fontSize: "sm",
                  }}
                  value="address1"
                >
                  Jl. Ketintang Barat No. 31, Surabaya
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: "-1",
                    ml: "2",
                    fontSize: "sm",
                  }}
                  value="address2"
                >
                  Jl. Bibis Karah No. 19, Surabaya
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              backgroundColor={"#11235A"}
              onPress={() => {
                setShowModal3(true);
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Payment Options</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: "-1",
                    ml: "2",
                    fontSize: "sm",
                  }}
                  value="payment1"
                >
                  Cash on delivery
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: "-1",
                    ml: "2",
                    fontSize: "sm",
                  }}
                  value="payment2"
                >
                  Credit/ Debit/ ATM Card
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              backgroundColor={"#11235A"}
              onPress={() => {
                setShowModal(false);
                setShowModal2(false);
                setShowModal3(false);
              }}
            >
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default Detailbuku1;
