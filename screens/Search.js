import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Box, Text, Input, VStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS } from '../constants';
import FIREBASE from '../config/FIREBASE';
import { getBookDetails } from '../actions/action';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // No need to initialize Firebase here; it should be done in your FIREBASE.js file
  }, []);

  const navigateToDetailbuku = async (bookId, bookDetails) => {
    try {
      if (!bookDetails) {
        bookDetails = await getBookDetails(bookId);
      }
      navigation.navigate('Detailbuku1', { bookDetails });
    } catch (error) {
      console.error('Error navigating to Detailbuku1:', error);
    }
  };

  const handleSearch = async () => {
    try {
      // Implement your Firestore query here
      const querySnapshot = await FIREBASE.firestore()
        .collection('books')
        .where('title', '>=', searchQuery.toUpperCase())
        .where('title', '<=', searchQuery.toLowerCase() + '\uf8ff')
        .get();

      // Extract search results from the query
      const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Update the state with search results
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetailbuku(item.id, item)}>
      <Box flexDirection="row" alignItems="center" padding={4}>
        <Image
          source={{ uri: item.cover }}
          alt="Book Cover"
          size="2xl"
          borderRadius={10}
          width={60}
          height={70}
          marginRight={4}
        />
        <VStack>
          <Text fontSize="lg" paddingleft={90}>{item.title}</Text>
          <Text>{item.author}</Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: COLORS.blue,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingVertical: 5 }}>
          <Ionicons name="chevron-back-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <Input
          placeholder="Search for books"
          flex={1}
          marginLeft={2}
          fontSize={16}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={{ paddingVertical: 5 }}>
          <Ionicons name="search-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Search Results */}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderSearchResult}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Search;
