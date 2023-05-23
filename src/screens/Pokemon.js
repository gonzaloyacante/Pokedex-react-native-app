import { StyleSheet, View, ScrollView, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

const Pokemon = (props) => {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 15 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsByIdApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <View style={styles.containerInfo}>
        <Type types={pokemon.types}/>
        <Stats stats={pokemon.stats}/>
      </View>
    </ScrollView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  containerInfo: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: Platform.OS === 'ios' ? 40 : 100,
  }
});
