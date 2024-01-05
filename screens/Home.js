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

  const navigateToDetailbuku = (bookId) => {
    navigation.navigate("Detailbuku1", { bookId });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box style={{ backgroundColor: "#E0F4FF", flex: 1 }}>
        <Box p={3}>
          <Header />
          <Gap height={16} />
          <Input /> 
          <Gap height={16} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack>
              <TouchableOpacity
                onPress={() => navigation.navigate("Detailbuku")}
              >
                <Banner source={require("../assets/images/cover1.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Detailbuku")}
              >
                <Banner source={require("../assets/images/cover2.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Detailbuku")}
              >
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
                <Category
                  source={"assets/images/icons8-love-book-80.png"}
                  name={"Romantic"}
                />
                <Category
                  source={"https://img.icons8.com/ios/100/workstation.png"}
                  name={"Computer"}
                />
                <Category
                  source={"https://img.icons8.com/badges/96/user.png"}
                  name={"Biography"}
                />
                <Category
                  source={
                    "https://img.icons8.com/material-outlined/96/code.png"
                  }
                  name={"Coding"}
                />
                <Category
                  source={"https://img.icons8.com/isometric-line/100/book.png"}
                  name={"Novel"}
                />
                <Category
                  source={
                    "https://img.icons8.com/fluency-systems-regular/48/mosque.png"
                  }
                  name={"Religion"}
                />
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