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
    <SafeAreaView>
      <Text style={styles.title}>Favoritos</Text>
      {pokemons.length === 0
        ? <Text style={styles.text}>
            En este momento no tienes pokemons en favoritos.{"\n\n"}
            Por favor, guarda algún pokemon para poder usar esta sección.
          </Text>
        : <PokemonList pokemons={pokemons} />}
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
  },
  text: {
    textAlign: "center",
    marginTop: 150,
    paddingHorizontal: 50
  },
});