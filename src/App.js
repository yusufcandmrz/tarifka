import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from "./pages/categories";
import Meals from "./pages/meals/Meals";
import Details from "./pages/details/Details";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "orange",
        },
        headerTitleAlign: "center",
        headerTintColor: "orange",
      }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;