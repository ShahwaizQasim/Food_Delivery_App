/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  ScrollView,
  Image,
} from "react-native";
import FoodDeliveryScreen from "./src/screens/FoodDeliveryScreen";

function App() {
  return (
    // <ScrollView style={styles.scrollContainer}>
    <FoodDeliveryScreen />
    // </ScrollView>
  );
}

export default App;
