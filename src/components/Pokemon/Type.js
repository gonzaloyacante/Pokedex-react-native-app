import { StyleSheet, Text, View } from "react-native";
import React from "react";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

const Type = (props) => {
  const { types } = props;

  const color = (type) => getColorByPokemonType(type);

  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>Types</Text>
      <View style={styles.typeInfo}>
        {types.map((item) => (
          <View
            key={item.type.name}
            style={{ backgroundColor: color(item.type.name), ...styles.pill }}>
            <Text style={styles.typeText}>{item.type.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  typeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    width: 120,
    margin: 2,
  },
  typeInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  typeText: {
    textAlign: "center",
    textTransform: "capitalize",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
