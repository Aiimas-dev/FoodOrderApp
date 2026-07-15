import { useOrders } from "@/context/OrderContext";
import { router } from "expo-router";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PesananScreen() {
  const { orders, finishOrder } = useOrders();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>← Kembali</Text>
        </TouchableOpacity>

        <Text style={styles.title}>🛒 Pesanan Saya</Text>
      </View>

      {orders.length === 0 ? (
        <Text style={styles.empty}>Belum ada pesanan</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.text}>Jumlah : {item.qty}</Text>

              <Text style={styles.text}>
                Total : Rp {item.total.toLocaleString("id-ID")}
              </Text>

              <View style={styles.statusBox}>
                <Text style={styles.status}>
                  {item.status === "Pesanan Selesai"
                    ? "✅ Pesanan Selesai"
                    : "🟢 Sedang Diproses"}
                </Text>
              </View>

              {item.status !== "Pesanan Selesai" && (
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={() => finishOrder(item.id)}
                >
                  <Text style={styles.doneText}>✅ Selesai</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EE",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    marginBottom: 25,
  },

  back: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D62828",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D62828",
    textAlign: "center",
  },

  empty: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 18,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 5,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },

  statusBox: {
    marginTop: 15,
    backgroundColor: "#E8F5E9",
    padding: 12,
    borderRadius: 10,
  },

  status: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#2E7D32",
  },

  doneButton: {
    marginTop: 15,
    backgroundColor: "#D62828",
    padding: 14,
    borderRadius: 12,
  },

  doneText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
