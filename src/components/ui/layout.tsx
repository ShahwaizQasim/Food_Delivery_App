import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Layout = ({ children }: any) => {
  return <View style={styles.containerFluid}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    width: '100%',
  },
});
