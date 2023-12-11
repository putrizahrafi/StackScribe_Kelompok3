import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading } from 'native-base';
import React from 'react';

const Header = () => {
  return (
    <Box>
      <HStack alignItems={"center"} space={2} justifyContent={"space-between"}>
        <Heading size={"lg"} color={"#001B79"}>Home</Heading>
        <Ionicons name="chatbox-ellipses-outline" size={28} color={"white"} />
      </HStack>
    </Box>
  )
}

export default Header