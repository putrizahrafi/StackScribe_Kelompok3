import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Box, HStack, Heading, Text as NText, Stack, TextArea, Image, Center, VStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Banner, BookCard, Category, Gap, Header, Input, Section } from '../components';

const Detailbuku1 = ({ navigation }) => {
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
                uri: "https://i.pinimg.com/564x/a3/23/f9/a323f9054c7f21e3f89780ebac0936c9.jpg"
                }} alt="Alternate Text" size='2xl' borderRadius={20} width={150} height={220}/>
                <Heading size="lg">
                    UNSEEN WORLD
                </Heading>
                <Text size="lg">
                    Jamilla Francis
                </Text>
                <Text>
                    Slice Of Life
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
    </SafeAreaView>
    );
};

export default Detailbuku1;
