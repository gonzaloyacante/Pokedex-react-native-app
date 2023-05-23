import { StyleSheet, Text, View, TextInput, Keyboard, Button } from "react-native";
import React from "react";

const LoginForm = () => {
  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Button
          title="Entrar"
          onPress={() => console.log("Entrando...")}
        />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginTop: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
  },
});
