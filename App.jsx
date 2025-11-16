// https://coolors.co/palette/00a6fb-0582ca-006494-003554-051923
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlarmsScreen from './components/AlarmsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

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
  const colorScheme = useColorScheme();

  const tabBarInactiveColor = colorScheme === 'dark' ? '#003554' : '#0582CA';
  const tabBarActiveColor = '#00A6FB';
  const tabBarBackground = colorScheme === 'dark' ? '#051923' : '#00A6FB';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: tabBarBackground },
      }}
    >
      <Tab.Screen
        name="Alarms"
        component={AlarmsStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="alarm"
              size={30}
              color={focused ? tabBarActiveColor : tabBarInactiveColor}
            />
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
