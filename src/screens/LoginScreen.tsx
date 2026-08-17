/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import ThemeButton from "../components/ui/Buttons";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (field: "email" | "password", value: string) => {
    setData({
      ...data,
      [field]: value,
    });
  };
  console.log("data===>", data);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar backgroundColor="red" barStyle="dark-content" />
        <View
          style={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 32, marginBottom: 10 }}>Login</Text>
          <TextInput
            style={styles.InputDesign}
            placeholder={"example@gmail.com"}
            inputMode={"email"}
            value={data.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            style={styles.InputDesign}
            placeholder={"********"}
            secureTextEntry={true}
            value={data.password}
            onChangeText={(text) => handleChange("password", text)}
          />
          <ThemeButton
            children={"Login"}
            textStyle={{ fontSize: 20 }}
            btnStyle={{color:'black'}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  InputDesign: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#666",
    fontSize: 18,
    paddingHorizontal: 10,
    textAlignVertical: "center",
  },
});

export default App;
