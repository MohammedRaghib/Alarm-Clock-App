import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlarmsScreen from "./components/AlarmsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AlarmsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AlarmsMain"
        component={AlarmsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name=""
        component={AlarmsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20, color: focused ? "#ff3b30" : "#555" }}>
              ⏰
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
