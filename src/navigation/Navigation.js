import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import AccountNavigation from "./AccountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {

  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
          tabBarLabel: "Favoritos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          headerTitle: "Pokedex",
          headerTitleAlign: "center",
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          headerTitle: "Mi Cuenta",
          headerTitleAlign: "center",
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball-red.png")}
      style={{ width: 70, height: 70, position: 'absolute', bottom: 0 }}
    />
  );
}

export default Navigation;
