import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Box, Text, Input, VStack, Button } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS } from '../constants';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <Box
        flexDirection="row"
        alignItems="center"
        backgroundColor={COLORS.blue}
        padding={4}
        borderRadius={20}
      >
        <Ionicons name="arrow-back-outline" size={24} color={COLORS.black} />
        <Input
          placeholder="Search for books"
          flex={1}
          marginLeft={2}
          fontSize={16}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Ionicons name="search-outline" size={24} color={COLORS.black} onPress={handleSearch} />
      </Box>

      {/* Search Results */}
      <ScrollView>
        {/* Example search results */}
        <VStack space={4} padding={4}>
          <Box
            backgroundColor="#FFFFrrFF"
            borderRadius={20}
            padding={4}
            alignItems="center"
          >
            <Text fontSize="lg">Book Title 1</Text>
            <Text fontSize="md">Author Name</Text>
          </Box>

          <Box
            backgroundColor="#FFFFrrFF"
            borderRadius={20}
            padding={4}
            alignItems="center"
          >
            <Text fontSize="lg">Book Title 2</Text>
            <Text fontSize="md">Author Name</Text>
          </Box>

          {/* Add more search result boxes as needed */}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;