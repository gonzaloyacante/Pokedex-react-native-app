import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import pokeballWhite from "../../assets/pokeball-white.png";


const Header = (props) => {
  const { name, order, image, type } = props;

  const pokemonColor = getColorByPokemonType(type);
  const bgStyles = [{ backgroundColor: pokemonColor, ...styles.bgStyles }];

  return (
    <View>
      <View style={bgStyles} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.contentImg}>
            <Image
                source={pokeballWhite}
                style={styles.pokeball}
            />
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  bgStyles: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 5 : 7,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    textTransform: "capitalize",
    color: '#fff',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30
  },
  pokeball: {
    width: 300,
    height: 300,
    position: 'absolute',
    opacity: 0.2,
    zIndex: -100,
  },
  image: {
    width: 250,
    height: 250,
  }
})