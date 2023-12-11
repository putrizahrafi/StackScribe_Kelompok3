// import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { Box, HStack, Heading, Text } from 'native-base';

const HeaderSetting = ({title, onPress}) => {
    return (
        <Box>
            <HStack space={3} justifyContent={"space-between"}>
                <TouchableOpacity onPress={onPress}>
                    <Ionicons name='arrow-back-outline' size={28} />
                </TouchableOpacity>
                <Heading>{title}</Heading>
                <Ionicons name='ellipsis-horizontal-circle-outline' size={28} />
            </HStack>
        </Box>
    )
}

export default HeaderSetting