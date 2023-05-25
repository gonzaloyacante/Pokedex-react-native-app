import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from "../api/pokemon";

import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const {results: pokemonsResponse, next: nextPokemonListUrl} =
        await getPokemonsApi(nextUrl);
      setNextUrl(nextPokemonListUrl);

      const pokemonsArray = [];

      for await (const pokemon of pokemonsResponse) {
        const pokemonsDetails = await getPokemonsDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonsDetails.id,
          name: pokemonsDetails.name,
          type: pokemonsDetails.types[0].type.name,
          order: pokemonsDetails.order,
          image:
            pokemonsDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>
        Pokedex
      </Text>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={loading}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
  }
});

export default Pokedex;
