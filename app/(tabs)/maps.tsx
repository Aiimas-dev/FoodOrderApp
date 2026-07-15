import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function MapsScreen() {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let permission = await Location.requestForegroundPermissionsAsync();

    if (permission.status !== "granted") {
      return;
    }

    let current = await Location.getCurrentPositionAsync({});

    setLocation({
      latitude: current.coords.latitude,

      longitude: current.coords.longitude,
    });
  };

  if (!location) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />

        <Text>Membaca lokasi...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,

          longitude: location.longitude,

          latitudeDelta: 0.01,

          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={{
            latitude: -6.2267,

            longitude: 106.5337,
          }}
          title="QuickBite Restaurant"
          description="Cabang utama"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  loading: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },
});
