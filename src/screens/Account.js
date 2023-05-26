import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/userData";
import useAuth from "../Hooks/useAuth";

const Account = () => {
  const { auth } = useAuth();

  return (
    <SafeAreaView>
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
};

export default Account;
