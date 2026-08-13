import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <>
      {/* header  */}

      <View style={styles.header}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Foodgo.png")}
            style={styles.logo}
          />
        </View>

        {/* Profile */}
        <Image
          source={require("../../assets/MaskGroup.png")}
          style={styles.profile}
        />

        {/* Heading */}
        <Text style={styles.heading}>Order your favourite food!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 5,
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    height: 50,
    width: 140,
  },

  profile: {
    height: 80,
    width: 80,
  },

  heading: {
    position: "absolute",
    left: 6,
    bottom: -10,
    fontSize: 20,
  },
});

export default Header;
