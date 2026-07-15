import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FoodCard({ item }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.rating}>
            <Text style={styles.ratingText}>⭐ 4.9</Text>
          </View>
        </View>

        <Text numberOfLines={2} style={styles.desc}>
          {item.description}
        </Text>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>{item.price}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push({
                pathname: "/(protected)/detail",
                params: {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  description: item.description,
                },
              })
            }
          >
            <Text style={styles.buttonText}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Best Seller</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  image: {
    width: "100%",
    height: 190,
  },

  info: {
    padding: 18,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    flex: 1,
  },

  rating: {
    backgroundColor: "#FFE082",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  ratingText: {
    fontWeight: "bold",
    color: "#333",
  },

  desc: {
    marginTop: 10,
    color: "#666",
    lineHeight: 22,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D62828",
  },

  button: {
    backgroundColor: "#D62828",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 30,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#FF9800",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});
