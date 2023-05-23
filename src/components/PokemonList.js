import { StyleSheet, FlatList, ActivityIndicator, StatusBar } from 'react-native'
import React from 'react'
import PokemonCard from "./PokemonCard"

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext, isLoading } = props

  const loadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      contentContainerStyle={styles.flatListContentContainer}
      renderItem={({item}) => <PokemonCard pokemon={item}/>}
      onEndReached={ !isLoading && isNext && loadMore }
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isLoading && isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color='#AEAEAE'
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    padding: 0,
    marginTop: 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  }
});

export default PokemonList