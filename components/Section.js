import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Text } from 'native-base';
import React from 'react';

const Section = ({title, name}) => {
    return (
        <HStack space={2} justifyContent={"space-between"}>
            <Heading size={"md"} >{title}</Heading>
            <Box>
                <HStack alignItems={"center"}>
                    <Text fontSize={16} fontWeight={"semibold"}>{name}</Text>
                    <Ionicons name='chevron-forward-outline' size={16} />
                </HStack>
            </Box>
        </HStack>
    )
}

export default Section