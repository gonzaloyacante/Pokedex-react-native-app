import { StyleSheet, Text, View } from "react-native";
import React from "react";

const About = (props) => {
  const { height, weight } = props;

  const formattedHeight = (height / 10).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });
  const formattedWeight = (weight / 10).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.infoTitle}>Información</Text>
      <View style={styles.infoInfo}>
        <View style={styles.pill}>
          <Text style={styles.infoText}>{`${formattedHeight} m`}</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.infoText}>{`${formattedWeight} Kg`}</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  pill: {
    backgroundColor: "#6b6b6b",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    width: 120,
    margin: 2,
  },
  infoText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
