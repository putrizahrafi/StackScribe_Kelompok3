import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, BookCard, Category, Gap, Header, Input, Section } from '../components';
import { Box, HStack, Heading, Image, ScrollView, Text } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
  const navigateToDetailbuku = () => {
    navigation.navigate("Detailbuku");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box style={{ backgroundColor: '#E0F4FF', flex: 1 }}>
        <Box p={3}>
          <Header />
          <Gap height={16} />
          <Input />
          <Gap height={16} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack>
            <TouchableOpacity onPress={() => navigation.navigate('Detailbuku')}>
              <Banner source={require('../assets/images/cover1.jpeg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Detailbuku')}>
              <Banner source={require('../assets/images/cover2.jpeg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Detailbuku')}>
              <Banner source={require('../assets/images/cover3.jpeg')} />
            </TouchableOpacity>
            </HStack>
          </ScrollView>
        </Box>
        <Box backgroundColor={"white"} flex={1} borderTopRadius={20} p={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Section title={"Categories"} name={"more"} />
            <Gap height={12} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack p={2}>
                <Category
                  source={'https://img.icons8.com/external-thin-kawalan-studio/96/external-telescope-education-thin-kawalan-studio-3.png'}
                  name={"Sains"} />
                <Category
                  source={'https://img.icons8.com/ios/100/workstation.png'}
                  name={"Computer"} />
                <Category
                  source={'https://img.icons8.com/badges/96/user.png'}
                  name={"Biography"} />
                <Category
                  source={'https://img.icons8.com/material-outlined/96/code.png'}
                  name={"Coding"} />
                <Category
                  source={'https://img.icons8.com/isometric-line/100/book.png'}
                  name={"Novel"} />
                <Category
                  source={'https://img.icons8.com/fluency-systems-regular/48/mosque.png'}
                  name={"Religion"} />
              </HStack>
            </ScrollView>
            <Gap height={12} />
            <TouchableOpacity onPress={() => navigation.navigate('Detailbuku')}>
            <Section title={"Popular"} name={"see all"} />
            </TouchableOpacity>
            <Gap height={12} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack>
              <TouchableOpacity onPress={() => navigation.navigate('Detailbuku1')}>
                <BookCard
                  source={require('../assets/images/book1.jpeg')}
                  title={'Unseen World'}
                  author={'by: Jamilla Francis'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detailbuku')}>
                <BookCard
                  source={require('../assets/images/book2.jpeg')}
                  title={'Good Enough'}
                  author={'by: Jen Petro-Roy'}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detailbuku2')}>
                <BookCard
                  source={require('../assets/images/book3.jpeg')}
                  title={'Misery'}
                  author={'by: Stephen King'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detailbuku3')}>
                <BookCard
                  source={require('../assets/images/book4.jpeg')}
                  title={'Pride And Prejudice'}
                  author={'by: Jane Austen'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detailbuku4')}>
                <BookCard
                  source={require('../assets/images/book5.jpeg')}
                  title={'Lost Boy'}
                  author={'by: Christina Henry'} />
                </TouchableOpacity>
              </HStack>
            </ScrollView>
            <Gap height={50} />
          </ScrollView>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Home
