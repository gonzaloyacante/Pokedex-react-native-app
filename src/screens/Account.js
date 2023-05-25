import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/userData";
import useAuth from "../Hooks/useAuth";

const Account = () => {
  const { auth } = useAuth();

  return (
    <SafeAreaView>
      <Text style={styles.title}>
        Mi Cuenta
      </Text>
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
  }
});
