import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer";
import SearchBar from "../components/layout/SearchBar";
import CategoryTabs from "../components/layout/CategoryTabs";
import ProductsList from "../components/layout/ProductsList";

const FoodDeliveryScreen = () => {
  return (
    <View style={styles.containerFluid}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Header />
        <SearchBar />
        <CategoryTabs />
        <ProductsList />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "90%",
    margin: "auto",
  },
});

export default FoodDeliveryScreen;
