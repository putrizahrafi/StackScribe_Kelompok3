import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import {
  Login,
  Register,
  Home,
  Category,
  Welcome,
  EditProfile,
  ContactUs,
  Guide,
  Detailbuku1,
  SearchScreen,
  SeeAllScreen,
  Cart,
  Popular,
  CobaCamera,
} from "./screens";
import BottomTabNav from "./navigations/BottomTabNav";
import { NativeBaseProvider } from "native-base";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Inter-Black.ttf"),
    bold: require("./assets/fonts/Inter-Bold.ttf"),
    medium: require("./assets/fonts/Inter-Medium.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
    semiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />

          <Stack.Screen name="Detailbuku1" component={Detailbuku1} />

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Category" component={Category} />

          <Stack.Screen name="BottomTabNavigation" component={BottomTabNav} />

          <Stack.Screen name="EditProfile" component={EditProfile} />

          <Stack.Screen name="ContactUs" component={ContactUs} />

          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Guide" component={Guide} />

          <Stack.Screen name="Search" component={SearchScreen} />

          <Stack.Screen name="SeeAll" component={SeeAllScreen} />

          <Stack.Screen name="Cart" component={Cart} />

          <Stack.Screen name="Popular" component={Popular} />

          <Stack.Screen name="CobaCamera" component={CobaCamera} />


        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
