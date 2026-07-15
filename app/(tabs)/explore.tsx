import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { foods } from "../../data/foods";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Explore Menu Favorit</Text>

      <Text style={styles.subtitle}>Temukan makanan terbaik di QuickBite</Text>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.desc}>{item.description}</Text>

              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EE",
    padding: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#D62828",
    marginTop: 20,
  },

  subtitle: {
    marginTop: 5,
    color: "#666",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 180,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  desc: {
    marginTop: 5,
    color: "#666",
  },

  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#D62828",
  },
});
