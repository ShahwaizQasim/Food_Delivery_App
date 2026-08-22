import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodDeliveryScreen from '../screens/FoodDeliveryScreen';
import FoodDetails from '../screens/FoodDetails';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="FoodDeliveryScreen" component={FoodDeliveryScreen} /> */}
                <Stack.Screen name="MainTabs" component={TabNavigator} />
                <Stack.Screen name="FoodDetail" component={FoodDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator