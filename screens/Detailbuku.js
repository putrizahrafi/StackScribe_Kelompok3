import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Box, HStack, Heading, Text as NText, Stack, TextArea, Image, Center, VStack, Modal, Button, Radio } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Banner, BookCard, Category, Gap, Header, Input, Section } from '../components';

const Detailbuku = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
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

        <Text style={{ ...FONTS.h3 }}>Detail Buku</Text>
        </View>

        <ScrollView w={["200", "300"]} h="80">
        <Box style={{ backgroundColor: '#FFFFrrFF', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Box p={3} ></Box>
                <Image source={{
                uri: "https://i.pinimg.com/564x/3a/4d/46/3a4d46a07bea2589327f2a43254ea906.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={20} width={150} height={220}/>
                <Heading size="lg">
                    GOOD ENOUGH
                </Heading>
                <Text size="lg">
                    Jen Petro-Roy
                </Text>
                <Text>
                    Romance
                </Text>
        </Box>
        <Box>
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Sinopsis</Heading>
      </Center>
      <VStack flex="1">
        <Text
        marginHorizontal={20}>
        Sebelum ia mengalami gangguan makan, Riley yang berusia dua belas tahun adalah banyak hal: seorang seniman yang bercita-cita tinggi, pelari, saudara perempuan, dan teman.
        </Text>

        <Text marginHorizontal={20} >
        Tapi sekarang, dari dalam pusat perawatan rawat inap di mana dia menerima perawatan untuk anoreksia, mudah untuk melupakan semua itu. Terutama karena di bawah pengaruh gangguan makannya, Riley mengasingkan teman-temannya, meninggalkan seninya, mengubah lari menjadi sesuatu yang berbahaya, dan menghancurkan kepercayaan keluarganya.
        </Text>
        <Text marginHorizontal={20}>
        Jika Riley ingin hidupnya kembali, dia harus pulih.

        Sebagian dari dirinya ingin menjadi lebih baik. Ketika dia pergi ke terapi, berteman di rumah sakit, dan mulai menggambar lagi, segalanya mulai terlihat membaik.
        </Text>
        <Text marginHorizontal={20}>
        Namun ketika teman sekamarnya mulai melanggar peraturan, memicu perilaku lama Riley dan memerasnya untuk diam, Riley menyadari bahwa pemulihan akan lebih sulit daripada yang ia kira. Dia mulai berpikir bahwa meskipun dia "sembuh", tidak mungkin dia akan tetap sembuh begitu dia meninggalkan rumah sakit dan dihadapkan dengan ibunya yang sedang berdiet, pengganggu di sekolah, dan saudara perempuannya yang bintang senam.
        </Text>
        <Text marginHorizontal={20}>
        Ditulis oleh seorang penyintas gangguan makan, ini adalah penggambaran realistis tentang perawatan gangguan makan rawat inap, dan kisah mengharukan tentang seorang gadis yang harus berjuang untuk bertahan hidup.
        </Text>
      </VStack>
        </Box>
        </ScrollView>
        <Button marginHorizontal={70} marginTop={10} marginBottom={3} backgroundColor={'#9BB8CD'} onPress={() => navigation.navigate('Cart')}>Add To Cart</Button>
      <Button marginHorizontal={70} marginBottom={10} backgroundColor={'#11235A'} onPress={() => setShowModal(true)}>Checkout</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Sub Total</Text>
                <Text color="blueGray.400">Rp 50.000</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">Rp 5.000</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">Rp 55.000</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" backgroundColor={'#11235A'} onPress={() => {
            setShowModal2(true);
          }}>
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
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="address1">
                  Jl. Ketintang Barat No. 31, Surabaya
                </Radio>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="address2">
                  Jl. Bibis Karah No. 19, Surabaya
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" backgroundColor={'#11235A'} onPress={() => {
            setShowModal3(true);
          }}>
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
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment1">
                  Cash on delivery
                </Radio>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment2">
                  Credit/ Debit/ ATM Card
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" backgroundColor={'#11235A'} onPress={() => {
            setShowModal(false);
            setShowModal2(false);
            setShowModal3(false);
          }}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
    );
};

export default Detailbuku;
