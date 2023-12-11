import { Box, HStack, Heading, Input, Text, TextArea } from 'native-base';
import { View, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, HeaderSetting } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const ContactUs = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Box p={3}>
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

                    <Text style={{ ...FONTS.h3 }}>Contact Us</Text>
                </View>
                <Gap height={18} />
                <Heading size={"xs"}>Name</Heading>
                <Input placeholder='Name' />
                <Gap height={12} />
                <Heading size={"xs"}>Email</Heading>
                <Input placeholder='Email' />
                <Gap height={12} />
                <Heading size={"xs"}>Feedback</Heading>
                <TextArea h={20} placeholder="Feedback"  />
                <Gap height={12} />
                <Box backgroundColor={"#242760"} p={3} alignItems={"center"} borderRadius={20}>
                    <Heading size={"sm"} color={"white"}>Save</Heading>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ContactUs