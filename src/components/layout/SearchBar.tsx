import { StyleSheet, View, Image, TextInput } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <View style={styles.inputDesign}>
        <View style={styles.iconBox}>
          <Image
            source={require("../../assets/search.png")}
            style={{ height: 25, width: 25 }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder={"Search"}
          inputMode={"text"}
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../../assets/searchButton.png")}
          style={{ height: 65, width: 65 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputDesign: {
    flexDirection: "row",
    height: 60,
    width: "80%",
    backgroundColor: "white",
    marginTop: 50,
    borderRadius: 20,
    boxShadow: "0 0px 4px #948c8c",
  },
  iconBox: {
    height: "100%",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: "100%",
    width: "100%",
    fontSize: 22,
  },
});

export default SearchBar;
