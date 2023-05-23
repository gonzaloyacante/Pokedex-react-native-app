import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/userData";
import useAuth from "../Hooks/useAuth";

const Account = () => {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default Account;

const styles = StyleSheet.create({});
