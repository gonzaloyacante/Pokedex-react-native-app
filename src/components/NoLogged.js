import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para ver esta pantalla debes iniciar sesión
      </Text>
      <Button
        title="Ir a Iniciar sesión"
        onPress={() => navigation.navigate("Account")}
      />
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
});
