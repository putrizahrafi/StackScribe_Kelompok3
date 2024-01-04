import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading } from 'native-base';
import React from 'react';

const Header = () => {
  return (
    <Box>
      <HStack alignItems={"center"} space={2} justifyContent={"space-between"}>
        <Heading size={"lg"} color={"#001B79"}>Home</Heading>
      </HStack>
    </Box>
  )
}

export default Header