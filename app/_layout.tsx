import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { OrderProvider } from "@/context/OrderContext";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <OrderProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" />

          <Stack.Screen name="(tabs)" />

          <Stack.Screen name="(protected)/detail" />
        </Stack>

        <StatusBar style="auto" />
      </ThemeProvider>
    </OrderProvider>
  );
}
