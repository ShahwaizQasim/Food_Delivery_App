import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '../components/layout/Header.tsx';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/layout/SearchBar';
import CategoryTabs from '../components/layout/CategoryTabs';
import ProductsList from '../components/Food/ProductsList.tsx';
import Layout from '../components/ui/layout.tsx';

const FoodDeliveryScreen = ({navigation}:any) => {
  return (
    <Layout>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Header />
        <SearchBar />
        <CategoryTabs />
        <ProductsList navigation={navigation}  />
      </View>
      <Footer />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    margin: 'auto',
  },
});

export default FoodDeliveryScreen;
