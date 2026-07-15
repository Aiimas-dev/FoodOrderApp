import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FoodCard from "../../components/FoodCard";
import { foods } from "../../data/foods";

export default function KatalogScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>← Kembali</Text>
        </TouchableOpacity>

        <Text style={styles.title}>🍔 Menu QuickBite</Text>

        <View style={{ width: 60 }} />
      </View>

      <Text style={styles.subtitle}>Pilih makanan favoritmu</Text>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FoodCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  back: {
    color: "#D62828",
    fontWeight: "bold",
    fontSize: 17,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D62828",
  },

  subtitle: {
    color: "#777",
    marginBottom: 15,
    marginLeft: 5,
  },
});
