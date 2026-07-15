import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef<CameraView>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [facing, setFacing] = useState<"front" | "back">("back");

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Izinkan akses kamera untuk mengambil foto bukti pesanan
        </Text>

        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Izinkan Kamera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync();

      if (result?.uri) {
        setPhoto(result.uri);
      }
    }
  };

  const changeCamera = () => {
    setFacing(facing === "back" ? "front" : "back");
  };

  if (photo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Foto Bukti Pesanan</Text>

        <Image source={{ uri: photo }} style={styles.preview} />

        <TouchableOpacity style={styles.button} onPress={() => setPhoto(null)}>
          <Text style={styles.buttonText}>Ambil Ulang</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Selesai</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing} />

      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>📸 Ambil Foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={changeCamera}>
          <Text style={styles.buttonText}>🔄 Ganti Kamera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>❌ Tutup Kamera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  camera: {
    flex: 1,
    width: "100%",
  },

  menu: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    gap: 10,
  },

  button: {
    backgroundColor: "#D62828",
    padding: 15,
    borderRadius: 10,
  },

  closeButton: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  text: {
    textAlign: "center",
    padding: 20,
    fontSize: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  preview: {
    width: 300,
    height: 400,
    borderRadius: 15,
    marginBottom: 20,
  },
});
