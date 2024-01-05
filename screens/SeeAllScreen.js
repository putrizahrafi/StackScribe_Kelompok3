import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Box, Text, VStack, Image, TouchableOpacity } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS } from '../constants';
import { fetchPopularBooks } from '../actions/action';

const SeeAllScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const allBooks = await fetchPopularBooks(); 
        setBooks(allBooks);
      } catch (error) {
        console.error('Error fetching all books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Box
        flexDirection="row"
        alignItems="center"
        backgroundColor={COLORS.blue}
        padding={4}
        borderRadius={20}
      >
        <Ionicons name="arrow-back-outline" size={24} color={COLORS.black} onPress={() => navigation.goBack()} />
        <Text fontSize={20} color="white" marginLeft={2} bold>
          All Books
        </Text>
      </Box>

      <ScrollView>
        <VStack space={4} padding={4}>
          {books.map((book) => (
            <TouchableOpacity
              key={book.id} 
              onPress={() => navigation.navigate('Detailbuku1', { bookId: book.id })}
            >
              <Box
                backgroundColor="#FFFFrrFF"
                borderRadius={20}
                padding={4}
                alignItems="center"
              >
                <Image
                  source={{ uri: book.imageUrl }}
                  alt="Book Cover"
                  size="2xl"
                  borderRadius={20}
                  width={150}
                  height={220}
                />
                <Text fontSize="lg">{book.title}</Text>
                <Text fontSize="md">{book.author}</Text>
              </Box>
            </TouchableOpacity>
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeeAllScreen;
