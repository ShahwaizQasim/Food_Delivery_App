/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodDeliveryScreen from './src/screens/FoodDeliveryScreen';
import FoodDetails from './src/screens/FoodDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FoodDeliveryScreen" component={FoodDeliveryScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
