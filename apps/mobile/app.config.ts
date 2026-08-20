export default {
  name: "BBrains",
  slug: "bbrains",
  scheme: "bbrains",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "app.bbrains.mobile",
    infoPlist: {
      NSCameraUsageDescription: "BBrains uses the camera to scan QR codes for payments, attendance, and events.",
    },
  },
  android: {
    package: "app.bbrains.mobile",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    permissions: [
      "android.permission.CAMERA",
      "android.permission.NFC",
      "android.permission.INTERNET",
      "android.permission.VIBRATE",
    ],
  },
  plugins: [
    "expo-router",
    "expo-notifications",
    "expo-secure-store",
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    apiUrl: process.env.API_URL ?? "http://localhost:4000",
    wsUrl: process.env.WS_URL ?? "ws://localhost:4000",
  },
};