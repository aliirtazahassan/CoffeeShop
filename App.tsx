import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from "react-native";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";



const Stack = createNativeStackNavigator();

const App = ()=> {
  return(

    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTransparent: true,
        headerTintColor: '#ffff',
        headerTitle: "",
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerTitle: "",
        }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>

    </>
  );
};


export default App;