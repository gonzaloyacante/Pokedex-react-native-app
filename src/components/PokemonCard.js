import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native";
import pokeballWhite from "../assets/pokeball-white.png";


const PokemonCard = (props) => {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <Pressable style={styles.container} onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Image
                source={pokeballWhite}
                style={styles.pokeball}
            />
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 130,
    borderRadius: 15,
    margin: 5,
  },
  spacing: {
    flex: 1,
    width: "100%",
  },
  bgStyles: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
  },
  pokeball: {
    width: 130,
    height: 130,
    position: 'absolute',
    opacity: 0.2,
    right: -20,
    bottom: -20,
    zIndex: -100,
  },
  number: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  name: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    top: 30,
    right: 5,
    minWidth: 90,
    minHeight: 100,
  },
});

export default PokemonCard;
