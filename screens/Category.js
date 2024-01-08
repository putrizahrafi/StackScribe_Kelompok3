import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, ScrollView, HStack, Button } from "native-base";
import { fetchBooksByGenre } from "../actions/action";
import { BookCard } from "../components";

const Category = ({ route }) => {
  const { genre } = route.params || {};
  const navigation = useNavigation();
  const [selectedGenre, setSelectedGenre] = useState(genre);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async (genre) => {
    try {
      const fetchedBooks = await fetchBooksByGenre(genre);
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error loading books:", error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Category",
      headerTitleStyle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginHorizontal: 50,
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
      },
    });

    // Load all books initially
    fetchBooks(null);
  }, [navigation]);

  useEffect(() => {
    // Load books based on the selected genre
    setLoading(true);
    fetchBooks(selectedGenre);
  }, [selectedGenre]);

  const navigateToDetailbuku = (bookId) => {
    // Implement your navigation logic here
    navigation.navigate("Detailbuku1", { bookId });
  };

  const renderCategoryButton = (genre) => (
    <Button
      key={genre}
      borderRadius={20}
      backgroundColor={selectedGenre === genre ? "#003580" : "#FFFFFF"}
      variant={"outline"}
      marginX={2}
      color={selectedGenre === genre ? "#FFFFFF" : "#003580"}
      onPress={() => {
        setSelectedGenre(selectedGenre === genre ? null : genre);
      }}
      style={{ margin: 5 }}
    >
      {genre}
    </Button>
  );

  return (
    <View style={{ flex: 1 }}>
      <Box
        bgColor={"#003580"}
        p={2}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack>
            {["Romance", "Fiction", "Fantasy", "Horror", "Mystery"].map(
              renderCategoryButton
            )}
          </HStack>
        </ScrollView>
      </Box>

      {loading ? (
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#003580" />
        </View>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToDetailbuku(item.id)}>
              <BookCard
                source={{ uri: item.cover }}
                title={item.title}
                author={item.author}
              />
            </TouchableOpacity>
          )}
          numColumns={2} // Set this to the number of columns you want
          contentContainerStyle={{
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          }}
        />
      )}
    </View>
  );
};

export default Category;
