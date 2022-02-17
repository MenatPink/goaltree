import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Screens
import SignIn from './src/containers/SignIn';
import Settings from './src/containers/Settings';
import Stats from './src/containers/Stats';
import Goals from './src/containers/Goals';
import SubGoals from './src/containers/SubGoals';
import Timer from './src/containers/Timer';

const page = 'Goals';
const homeName = 'Home';
const settingsName = 'Settings';
const statsName = 'Stats';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initalRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon:({focused, color, size}) => {
            let iconName;
            let rn = route.name

            if(rn === homeName){
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === statsName){
              iconName = focused ? 'list' : 'list-outline'
            } else if (rn === settingsName){
              iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarlabelStyle:{
            marginBottom: 10
          }
        }} 
      >
    
    <Tab.Screen name={homeName} component={Goals}></Tab.Screen>
    <Tab.Screen name={statsName} component={Stats}></Tab.Screen>
    <Tab.Screen name={settingsName} component={Settings}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
