import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 4000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/splash.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepTeal,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
