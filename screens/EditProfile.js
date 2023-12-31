import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, Box, Input, Button, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS, images } from "../constants";
import { updateUser } from "../actions/action"; // Import your function here

const EditProfile = ({ route, navigation }) => {
  const { nama: initialNama, email: initialEmail, nohp: initialNohp, uid } = route.params || {};
  const [nama, setNama] = useState(initialNama || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [nohp, setNohp] = useState(initialNohp || "");

  const onEditUser = async () => {
    if (nama && email && nohp) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
      };
  
      console.log(data);
  
      try {
        const success = await updateUser(route.params.uid, data);
        if (success) {
          navigation.goBack();
        } else {
          console.error("Failed to update user details");
        }
      } catch (error) {
        console.error("Error", error.message);
        // Handle the error accordingly
      }
    } else {
      console.error("Error", "Data tidak lengkap");
      // Handle the error accordingly
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <Box
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
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 0, padding: 20 }}
          />
          <Text style={{ ...FONTS.h3 }}>Edit Profile</Text>
        </Box>

        <Box alignItems="center" marginVertical={25}>
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
        </Box>

        <Box w="100%">
          <Text mb={3} bold fontSize="lg">
            Name
          </Text>
          <Input
            w="100%"
            h={35}
            value={nama}
            placeholder="Input Your Name"
            mb={5}
            onChangeText={(nama) => setNama(nama)}
          />
        </Box>

        <Box w="100%">
          <Text mb={3} bold fontSize="lg">
            Email
          </Text>
          <Input
            w="100%"
            h={35}
            value={email}
            placeholder="Input Your Email"
            mb={5}
            onChangeText={(email) => setEmail(email)}
          />
        </Box>

        <Box w="100%">
          <Text mb={3} bold fontSize="lg">
            Nomor HP
          </Text>
          <Input
            w="100%"
            h={35}
            value={nohp}
            placeholder="Input Your Phone Number"
            mb={5}
            onChangeText={(nohp) => setNohp(nohp)}
          />
        </Box>

        <Box alignItems="center">
          <Button onPress={onEditUser} colorScheme="primary">
            <Text>Save Change</Text>
          </Button>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default EditProfile;
