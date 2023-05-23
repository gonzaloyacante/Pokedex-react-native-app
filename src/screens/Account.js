import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/userData";

const Account = () => {
  const auth = null;

  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
