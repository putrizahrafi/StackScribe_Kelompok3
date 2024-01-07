import { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, ScrollView, HStack, Button } from "native-base";
import { fetchBooksByGenre } from "../actions/action";
import { BookCard } from "../components";

const Category = () => {
  const navigation = useNavigation();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [books, setBooks] = useState([]);

  const fetchBooks = async (genre) => {
    try {
      const fetchedBooks = await fetchBooksByGenre(genre);
      setBooks(fetchedBooks);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Category',
      headerTitleStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 50,
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
      },
    });

    // Load all books initially
    fetchBooks(null);
  }, [navigation]);

  useEffect(() => {
    // Load books based on the selected genre
    fetchBooks(selectedGenre);
  }, [selectedGenre]);

  const navigateToDetailbuku = (bookId) => {
    // Implement your navigation logic here
    console.log(`Navigate to book with ID: ${bookId}`);
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetailbuku(item.id)}>
      <BookCard source={{ uri: item.cover }} title={item.title} author={item.author} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Box bgColor={'#003580'} p={2}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack>
            {['Romance', 'Fiction', 'Fantasy', 'Horror', 'Mystery'].map(
              (genre, index) => (
                <Button
                  key={index}
                  borderRadius={20}
                  backgroundColor={
                    selectedGenre === genre ? '#003580' : '#FFFFFF'
                  }
                  variant={'outline'}
                  marginX={2}
                  color={selectedGenre === genre ? '#FFFFFF' : '#003580'}
                  onPress={() => {
                    setSelectedGenre(selectedGenre === genre ? null : genre);
                  }}
                >
                  {genre}
                </Button>
              )
            )}
          </HStack>
        </ScrollView>
      </Box>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
        numColumns={2} // Set this to the number of columns you want
        contentContainerStyle={{ justifyContent: 'space-around', paddingBottom: 20 }}
      />
    </View>
  );
};

export default Category;