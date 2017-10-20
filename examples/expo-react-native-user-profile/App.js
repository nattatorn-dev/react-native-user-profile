import React from "react";
import { Button, Platform, ScrollView, StyleSheet } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Profile1 from "./components/Profile1/Profile";

const ProfileStack = StackNavigator(
  {
    profile: {
      screen: Profile1,
      path: "/"
    }
  },
  {
    mode: "card"
  }
);

const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? "black" : "#fff",
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: "transparent"
      },
      labelStyle: {
        fontSize: 12
      },
      iconStyle: {
        width: 24,
        height: 24
      },
      style: {
        backgroundColor: "white",
        justifyContent: "center"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0
  }
});

export default SimpleTabs;
