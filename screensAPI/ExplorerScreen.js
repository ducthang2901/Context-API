import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const categories = [
  { id: 1, name: "Pizza", image: require("../assets/pizza.png") },
  { id: 2, name: "Burgers", image: require("../assets/burger.png") },
  { id: 3, name: "Steak", image: require("../assets/steak.png") },
];

const popularItems = [
  { id: 1, name: "French Fries", price: "$9.49", image: require("../assets/french_fries.png") },
  { id: 2, name: "Cheese Chicken", price: "$12.99", image: require("../assets/cheese_chicken.png") },
  { id: 3, name: "Grilled Ribs", price: "$18.99", image: require("../assets/grilled_ribs.png") },
  { id: 4, name: "Pasta Carbonara", price: "$13.99", image: require("../assets/pasta_carbonara.png") },
];

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="map-marker" size={20} color="gray" />
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
        <Icon name="magnify" size={20} color="gray" />
      </View>

      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularItems}
        numColumns={2}  
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  searchContainer: { flexDirection: "row", backgroundColor: "#f3f3f3", padding: 10, borderRadius: 5, alignItems: "center" },
  searchInput: { flex: 1, marginHorizontal: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  
  categoryItem: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 100, height: 100, borderRadius: 10 },

  popularHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  viewAll: { color: "orange", fontWeight: "bold" },

  popularItem: { width: "48%", backgroundColor: "#f3f3f3", padding: 10, borderRadius: 10, alignItems: "center", marginBottom: 10 },
  popularImage: { width: 120, height: 120, borderRadius: 10 },
  itemName: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  itemPrice: { fontSize: 14, color: "gray", marginTop: 2 },
});

export default ExplorerScreen;
