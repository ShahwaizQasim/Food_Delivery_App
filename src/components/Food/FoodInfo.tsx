import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface FoodProps {
  title: string;
  rating: string;
  time: string;
  description: string;
}

const FoodInfo = ({ title, rating, time, description }: FoodProps) => {
  return (
    <View style={{marginTop:30}}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.star}>★</Text>

        <Text style={styles.rating}>
          {rating} - {time}
        </Text>
      </View>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
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
    paddingVertical: 16,
  },
  text: {
    lineHeight: 26,
    fontSize: 16,
  },
});

export default FoodInfo;
