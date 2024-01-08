import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Banner,
  BookCard,
  Category,
  Gap,
  Header,
  Input,
  Section,
} from "../components";
import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Text,
  Modal,
  showModal,
  Button,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fetchPopularBooks } from "../actions/action";
import { TouchableOpacity } from "react-native";
import { getBookDetails } from "../actions/action";

const Home = ({ navigation }) => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await fetchPopularBooks();
        setPopularBooks(books);
      } catch (error) {
        console.error("Error in Home component:", error);
      }
    };

    fetchData();
  }, []);

  const navigateToDetailbuku = async (bookId, bookDetails) => {
    try {
      if (!bookDetails) {
        bookDetails = await getBookDetails(bookId);
      }
      navigation.navigate("Detailbuku1", { bookDetails });
    } catch (error) {
      console.error("Error navigating to Detailbuku1:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box style={{ backgroundColor: "#E0F4FF", flex: 1 }}>
        <Box p={3}>
          <Header />
          <Gap height={16} />
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Box backgroundColor="#001B79" borderRadius={20}>
              <HStack
                alignItems="center"
                p={3}
                space={2}
                justifyContent="space-between"
              >
                <Text fontSize={16} color="white" bold>
                  Search for books
                </Text>
                <Ionicons name="search-outline" size={20} color="white" />
              </HStack>
            </Box>
          </TouchableOpacity>
          <Gap height={16} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack>
              <TouchableOpacity
                onPress={() => navigateToDetailbuku("the_storm")}
              >
                <Banner source={require("../assets/images/cover1.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateToDetailbuku("wizard_of_oz")}
              >
                <Banner source={require("../assets/images/cover2.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToDetailbuku("wonder")}>
                <Banner source={require("../assets/images/cover3.jpeg")} />
              </TouchableOpacity>
            </HStack>
          </ScrollView>
        </Box>
        <Box backgroundColor={"white"} flex={1} borderTopRadius={20} p={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Section title={"Categories"} name={"more"} />
            <Gap height={12} />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HStack p={2}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Category", { genre: "Romance" })
                  }
                >
                  <Category
                    source={"https://img.icons8.com/ios/100/novel.png"}
                    name={"Romance"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Category", { genre: "Fiction" })
                  }
                >
                  <Category
                    source={
                      "https://img.icons8.com/fluency-systems-regular/96/enterprise-ncc-1701.png"
                    }
                    name={"Fiction"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Category", { genre: "Fantasy" })
                  }
                >
                  <Category
                    source={"https://img.icons8.com/ios/100/castle.png"}
                    name={"Fantasy"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Category", { genre: "Horror" })
                  }
                >
                  <Category
                    source={"https://img.icons8.com/ios/100/ghost--v1.png"}
                    name={"Horror"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Category", { genre: "Mystery" })
                  }
                >
                  <Category
                    source={"https://img.icons8.com/ios/100/cat-eyes.png"}
                    name={"Mystery"}
                  />
                </TouchableOpacity>
              </HStack>
            </ScrollView>
            <Gap height={12} />
            <TouchableOpacity onPress={() => navigation.navigate("SeeAll")}>
              <Section title={"Popular"} name={"see all"} />
            </TouchableOpacity>
            <Gap height={12} />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HStack>
                {popularBooks.map((book, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigateToDetailbuku(book.id)}
                  >
                    <BookCard
                      source={{ uri: book.cover }}
                      title={book.title}
                      author={book.author}
                    />
                  </TouchableOpacity>
                ))}
              </HStack>
            </ScrollView>
            <Gap height={50} />
          </ScrollView>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
