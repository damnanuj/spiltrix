import { Link } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Splitrix! and split like pro</Text>
      <Link href="/(tabs)" asChild>
        <Button title="Get Started" />
      </Link>
    </View>
  );
}
