import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
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
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon
            name="user"
            size={24}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            placeholder="Nombre de usuario"
            style={styles.input}
            autoCapitalize="none"
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="lock"
            size={24}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

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

        <View style={styles.infoLoginContainer}>
          <Text style={styles.infoLoginText}>Datos para iniciar sesión</Text>
          <Text style={styles.infoLoginText}>Usuario: usuario</Text>
          <Text style={styles.infoLoginText}>Contraseña: 12345</Text>
        </View>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 35,
    borderBottomWidth: 1,
  },
  icon: {
    position: "absolute",
    left: 20,
    bottom: 28,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 10,
  },
  infoLoginContainer: {
    marginTop: 30,
  },
  infoLoginText: {
    marginTop: 10,
    textAlign: "center",
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
  },
});
