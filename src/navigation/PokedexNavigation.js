import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContainerPokedex"
        component={PokedexScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false
        }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
