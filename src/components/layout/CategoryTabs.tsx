import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { tabs } from "../../utils/data.ts";
const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <View style={{ marginTop: 25 }}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ gap: 14 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setActiveTab(item)}
            style={[styles.tab, activeTab === item && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === item && styles.activeTabText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 50,
    paddingHorizontal: 28,
    borderRadius: 25,
    backgroundColor: "#F3F3F5",
    justifyContent: "center",
  },

  activeTab: {
    backgroundColor: "#F7253E",
    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  tabText: {
    fontSize: 18,
    color: "#666",
  },

  activeTabText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default CategoryTabs;
