import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from '../screens/Pokemon'

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContainerFavorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
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

export default FavoriteNavigation;
