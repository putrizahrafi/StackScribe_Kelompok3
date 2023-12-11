import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { 
Login,
Signup,
Home,
Messages,
Welcome,
EditProfile, 
ContactUs, 
Guide } from './screens';
import BottomTabNav from './navigations/BottomTabNav';
import { NativeBaseProvider } from 'native-base';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Inter-Black.ttf'),
    bold: require('./assets/fonts/Inter-Bold.ttf'),
    medium: require('./assets/fonts/Inter-Medium.ttf'),
    regular: require('./assets/fonts/Inter-Regular.ttf'),
    semiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null
  }
  return (
    <NativeBaseProvider>
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName='BottomTabNav'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Guide"
            component={Guide}
            options={{
              headerShown: false
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}


