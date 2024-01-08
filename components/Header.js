import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <Box>
      <HStack alignItems={"center"} space={2} justifyContent={"space-between"}>
        <Heading size={"lg"} color={"#001B79"}>Home</Heading>
        <TouchableOpacity onPress={handleCartPress}>
          <Ionicons name="cart-outline" size={28} color={"#001B79"} />
        </TouchableOpacity>
      </HStack>
    </Box>
  )
}

export default Header;