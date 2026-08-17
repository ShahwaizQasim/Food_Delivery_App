import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;