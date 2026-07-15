import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useOrders } from "@/context/OrderContext";

export default function DetailScreen() {
  const { name, price, image, description } = useLocalSearchParams();

  const { addOrder } = useOrders();

  const [qty, setQty] = useState(1);
  const [ordered, setOrdered] = useState(false);

  const numericPrice = Number(String(price).replace(/[^\d]/g, "")) || 0;

  const total = numericPrice * qty;

  const handleOrder = () => {
    addOrder({
      id: Date.now().toString(),

      name: String(name),

      qty: qty,

      total: total,

      status: "Sedang Diproses",
    });

    Alert.alert("Pesanan Berhasil", "Pesanan kamu sedang diproses.", [
      {
        text: "OK",
        onPress: () => setOrdered(true),
      },
    ]);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>← Kembali</Text>
        </TouchableOpacity>
      </View>

      {/* Gambar makanan */}

      <Image
        source={{
          uri: image as string,
        }}
        style={styles.image}
      />

      {!ordered ? (
        <>
          {/* Detail makanan */}

          <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.desc}>{description}</Text>

            <Text style={styles.price}>{price}</Text>

            <Text style={styles.sectionTitle}>Jumlah Pesanan</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => qty > 1 && setQty(qty - 1)}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyNumber}>{qty}</Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => setQty(qty + 1)}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.total}>
              Total : Rp {total.toLocaleString("id-ID")}
            </Text>
          </View>

          {/* Kamera */}

          <TouchableOpacity
            style={styles.redButton}
            onPress={() => router.push("/camera")}
          >
            <Text style={styles.buttonText}>📸 Ambil Bukti Foto</Text>
          </TouchableOpacity>

          {/* Pesan */}

          <TouchableOpacity style={styles.greenButton} onPress={handleOrder}>
            <Text style={styles.buttonText}>🛒 Pesan Sekarang</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.successCard}>
          <Text style={styles.check}>✅</Text>

          <Text style={styles.successTitle}>Pesanan Berhasil</Text>

          <Text style={styles.successDesc}>
            Terima kasih telah memesan di QuickBite Restaurant.
          </Text>

          <Image
            source={{
              uri: image as string,
            }}
            style={styles.successImage}
          />

          <Text style={styles.foodName}>{name}</Text>

          <Text style={styles.foodInfo}>Jumlah : {qty}</Text>

          <Text style={styles.foodInfo}>
            Total : Rp {total.toLocaleString("id-ID")}
          </Text>

          <Text style={styles.status}>🟢 Sedang Diproses</Text>

          <Text style={styles.estimation}>Estimasi 20 - 30 menit</Text>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.replace("/(tabs)")}
          >
            <Text style={styles.buttonText}>🏠 Kembali ke Home</Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          height: 40,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EE",
  },

  header: {
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  back: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D62828",
  },

  image: {
    width: "100%",
    height: 260,
  },

  card: {
    backgroundColor: "#FFF",
    margin: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
  },

  desc: {
    marginTop: 12,
    color: "#666",
    fontSize: 16,
  },

  price: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "#D62828",
  },

  sectionTitle: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: "bold",
  },

  qtyRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  qtyButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#D62828",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  qtyNumber: {
    marginHorizontal: 25,
    fontSize: 22,
    fontWeight: "bold",
  },

  total: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "#D62828",
  },

  redButton: {
    backgroundColor: "#D62828",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 12,
  },

  greenButton: {
    backgroundColor: "#2E7D32",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

  successCard: {
    backgroundColor: "#FFF",
    margin: 20,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 5,
  },

  check: {
    fontSize: 70,
  },

  successTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  successDesc: {
    marginTop: 10,
    textAlign: "center",
    color: "#666",
  },

  successImage: {
    width: 180,
    height: 180,
    borderRadius: 15,
    marginTop: 20,
  },

  foodName: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
  },

  foodInfo: {
    marginTop: 8,
    fontSize: 18,
    color: "#555",
  },

  status: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  estimation: {
    marginTop: 8,
    color: "#666",
  },

  homeButton: {
    backgroundColor: "#D62828",
    width: "100%",
    marginTop: 30,
    padding: 16,
    borderRadius: 12,
  },
});
