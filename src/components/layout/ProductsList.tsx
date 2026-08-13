import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { products } from "../../utils/data.ts";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <View style={{ gap: 20, marginTop: 25 }}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  row: {
    gap: 15,
    marginBottom: 15,
  },
});
