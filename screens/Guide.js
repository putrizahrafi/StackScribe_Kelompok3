import { Box, Heading, Text } from 'native-base';
import { View, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, HeaderSetting } from '../components';
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const Guide = ({ navigation }) => {
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

                    <Text style={{ ...FONTS.h3 }}>Guide</Text>
                </View>
                <Gap height={24} />
                <Box mb={5}>
                    <Heading size={"sm"} mb={2}>Spesification Minimum Android</Heading>
                    <Text>- 4.0 and up</Text>
                    <Text>- 1 GB of RAM</Text>
                    <Text>- 4-inch display size</Text>
                </Box>
                <Box>
                    <Heading size={"sm"} mb={2}>Spesification Minimum IOS</Heading>
                    <Text>- Required iOS 7.0 or later</Text>
                    <Text>- Optimized for iPhone 5</Text>
                    <Text>- Compatible for iPhone and iPod Touch</Text>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default Guide