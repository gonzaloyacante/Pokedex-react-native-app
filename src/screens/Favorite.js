import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import useAuth from "../Hooks/useAuth";
import PokemonList from "../components/PokemonList"
import NoLogged from "../components/NoLogged"

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi()

          const pokemonsArray = [];

          for await (const id of response) {
          const pokemonsDetails = await getPokemonDetailsByIdApi(id);

          pokemonsArray.push({
            id: pokemonsDetails.id,
            name: pokemonsDetails.name,
            type: pokemonsDetails.types[0].type.name,
            order: pokemonsDetails.order,
            image:
              pokemonsDetails.sprites.other["official-artwork"].front_default,
          });
        }

        setPokemons(pokemonsArray)
        })()
      }
    }, [auth])
  )

  return !auth ? (
    <NoLogged />
  ) : (
    <SafeAreaView><Text style={styles.title}>Favoritos</Text><PokemonList pokemons={pokemons} /></SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
  }
});