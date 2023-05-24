import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Button } from "react-native";
// import React, { useState, useEffect } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";

const Favorite = () => {
  // const [favorites, setFavorites] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const response = await getPokemonsFavoriteApi();
  //     console.log(response);
  //   })();
  // }, []);

  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});