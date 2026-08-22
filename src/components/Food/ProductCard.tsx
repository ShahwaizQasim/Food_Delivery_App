import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

type Product = {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: any;
};

type ProductCardProps = {
  item: Product;
  onPress?: () => void;
};

const ProductCard = ({ item, onPress }: ProductCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />

        <Text style={styles.productName}>{item.name}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.bottomRow}>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>★</Text>

            <Text style={styles.rating}>{item.rating}</Text>
          </View>

          <Pressable>
            <Text style={styles.heart}>♡</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    justifyContent: 'center',
    minHeight: 225,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  productImage: {
    width: '100%',
    height: 115,
    marginBottom: 5,
  },

  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginTop: 3,
  },

  description: {
    fontSize: 16,
    color: '#3D3535',
    marginTop: 3,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    color: '#FF8A2B',
    fontSize: 20,
    marginRight: 5,
  },

  rating: {
    fontSize: 15,
    color: '#3D3535',
  },

  heart: {
    fontSize: 34,
    color: '#3D3535',
    lineHeight: 34,
  },
});

export default ProductCard;
