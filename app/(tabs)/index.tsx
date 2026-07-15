import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("token");
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>👋 Selamat Datang</Text>
            <Text style={styles.restaurant}>QuickBite Restaurant</Text>
          </View>

          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>🔥 Promo Hari Ini</Text>
            <Text style={styles.bannerText}>Buy 1 Get 1 Burger</Text>
            <Text style={styles.bannerSmall}>
              Berlaku sampai pukul 22.00 WIB
            </Text>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* Kategori */}
        <Text style={styles.sectionTitle}>Kategori</Text>

        <View style={styles.categoryRow}>
          <View style={styles.categoryCard}>
            <Text style={styles.icon}>🍔</Text>
            <Text>Burger</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text style={styles.icon}>🍟</Text>
            <Text>Snack</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text style={styles.icon}>🥤</Text>
            <Text>Drink</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text style={styles.icon}>🍗</Text>
            <Text>Chicken</Text>
          </View>
        </View>

        {/* Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Nikmati makanan favoritmu</Text>

          <Text style={styles.infoText}>
            QuickBite menyediakan berbagai menu makanan siap saji dengan
            kualitas terbaik, harga terjangkau dan pelayanan cepat.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/katalog")}
        >
          <Text style={styles.menuText}>🍟 Lihat Menu</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EE",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },

  welcome: {
    color: "#777",
    fontSize: 16,
  },

  restaurant: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D62828",
  },

  logoutBtn: {
    backgroundColor: "#D62828",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  logoutText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  banner: {
    marginHorizontal: 20,
    backgroundColor: "#D62828",
    borderRadius: 20,
    flexDirection: "row",
    padding: 18,
    alignItems: "center",
  },

  bannerTitle: {
    color: "#FFD60A",
    fontWeight: "bold",
    fontSize: 18,
  },

  bannerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },

  bannerSmall: {
    color: "#FFF",
    marginTop: 8,
  },

  bannerImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginLeft: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
    marginBottom: 10,
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  categoryCard: {
    width: 75,
    height: 80,
    backgroundColor: "#FFF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  icon: {
    fontSize: 28,
    marginBottom: 5,
  },

  infoCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  infoText: {
    color: "#666",
    lineHeight: 24,
  },

  menuButton: {
    backgroundColor: "#D62828",
    margin: 20,
    padding: 18,
    borderRadius: 15,
  },

  menuText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
