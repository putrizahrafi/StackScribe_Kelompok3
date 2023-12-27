import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import {
Login,
Register,
Home,
Messages,
Welcome,
EditProfile,
ContactUs,
Guide,
Detailbuku,
Detailbuku1,
Detailbuku2,
Detailbuku3,
Detailbuku4 } from './screens';
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
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Detailbuku"
          component={Detailbuku}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Detailbuku1"
          component={Detailbuku1}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Detailbuku2"
          component={Detailbuku2}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Detailbuku3"
          component={Detailbuku3}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Detailbuku4"
          component={Detailbuku4}
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
            name="Register"
            component={Register}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
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


