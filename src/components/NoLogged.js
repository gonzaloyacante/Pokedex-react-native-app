import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para ver esta pantalla debes iniciar sesión
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Account")}>
        <Text style={styles.buttonText}>Ir a Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoLogged;

const styles = StyleSheet.create({
  container: {
    marginVertical: 200,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
