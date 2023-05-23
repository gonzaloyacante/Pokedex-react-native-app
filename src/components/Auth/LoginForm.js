import { StyleSheet, Text, View, TextInput, Keyboard, Button } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log('Formulario Enviado');
      console.log(formValue);
    }
  })


  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue('username', text)}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue('password', text)}
        />
        <Button
          title="Entrar"
          onPress={formik.handleSubmit}
        />
        <Text style={styles.errors}>{formik.errors.username}</Text>
        <Text style={styles.errors}>{formik.errors.password}</Text>
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
  errors: {
    textAlign: "center",
    color: "#f00",
    marginTop: 10,
  }
});
