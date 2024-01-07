import { Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Box, ScrollView, HStack, Gap, Button } from 'native-base'

const Category = () => {
  const navigation = useNavigation();
useLayoutEffect(() => {
  navigation.setOptions({
  headerShown:true,
  title:"Category",
  headerTitleStyle:{
    fontSize: 40,
    fontWeight:"bold",
    color:"white",
    marginHorizontal: 10
  },
  headerStyle:{
    backgroundColor:"#003580",
    height:110,
  },
  })
}, [])
  return (
    <View>
    <Box bgColor={'#003580'} p={2}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <HStack>
    <Button borderRadius={20} backgroundColor={'#FFFFFF'} variant={'outline'}  marginX={2} onPress={() => console.log("hello world")}>Romance</Button>
    <Button borderRadius={20} backgroundColor={'#FFFFFF'} variant={'outline'}  marginX={2} onPress={() => console.log("hello world")}>Fiction</Button>
    <Button borderRadius={20} backgroundColor={'#FFFFFF'} variant={'outline'}  marginX={2} onPress={() => console.log("hello world")}>Fantasy</Button>
    <Button borderRadius={20} backgroundColor={'#FFFFFF'} variant={'outline'}  marginX={2} onPress={() => console.log("hello world")}>Horror</Button>
    <Button borderRadius={20} backgroundColor={'#FFFFFF'} variant={'outline'}  marginX={2} onPress={() => console.log("hello world")}>Mistery</Button>
    </HStack>
    </ScrollView>
    </Box>
    </View>
  )
}

export default Category