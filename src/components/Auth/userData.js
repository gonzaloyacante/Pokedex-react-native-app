import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import useAuth from "../../Hooks/useAuth";
import { getPokemonsFavoriteApi } from "../../api/favorite"

const userData = () => {
  const { auth, logout } = useAuth();
  const [totalFavorites, setTotalFavorites] = useState(0)

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi()
          setTotalFavorites(response?.length || 0)
        } catch (error) {
          setTotalFavorites(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Bienvenido,
        </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContainer}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Usuario" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favoritos" text={`${totalFavorites} Pokemons`} />
      </View>

      <Button title='Cerrar sesión' onPress={logout} />
    </View>
  )
}

export default userData

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dataContainer: {
    marginBottom: 40,
    alignItems: 'center'
  },
  itemMenu: {
    width: '90%',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
  },
  itemMenuTitle: {
    width: 100,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemMenuText: {
    fontWeight: 400,
    fontSize: 16,
  },
})