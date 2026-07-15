import { Stack, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export default function ProtectedLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await SecureStore.getItemAsync("token");

    if (!token) {
      router.replace("/login");
    }

    setLoading(false);
  };

  if (loading) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
