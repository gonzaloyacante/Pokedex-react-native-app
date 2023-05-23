import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../Hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
        console.log("Login correcto");
        console.log(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />

        <Button title="Entrar" onPress={formik.handleSubmit} />

        {/* <Text style={styles.error}>{formik.errors.username}{"\n"}{formik.errors.password}{"\n"}{error}</Text> */}

        {formik.errors.username ? (
          <Text style={styles.error}> {formik.errors.username} </Text>
        ) : (
          ""
        )}
        {formik.errors.password ? (
          <Text style={styles.error}> {formik.errors.password} </Text>
        ) : (
          ""
        )}
        {error ? <Text style={styles.error}> {error} </Text> : ""}

        {/* <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.password}</Text>

        <Text style={styles.error}>{error}</Text> */}
      </View>
    </View>
  );
};

export default LoginForm;

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 15,
  },
  container: {
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 10,
  },
});
