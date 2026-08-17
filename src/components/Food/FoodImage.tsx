import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

interface source {
  source: any;
}

const FoodImage = ({ source }: source) => {
  return (
    <View style={styles.ImgContainer}>
      <Image source={source} style={styles.productDetailImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  ImgContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  productDetailImg: {
    height: 280,
    width: '85%',
    resizeMode: 'cover',
  },
});

export default FoodImage;
