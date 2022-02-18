import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//fonts
import {useFonts as useNunito, Nunito_700Bold, Nunito_200ExtraLight} from '@expo-google-fonts/nunito';
import  {useFonts as useSora, Sora_700Bold } from '@expo-google-fonts/sora';


//Screens
import SignIn from './src/containers/SignIn';
import Settings from './src/containers/Settings';
import Stats from './src/containers/Stats';
import Goals from './src/containers/Goals';
import SubGoals from './src/containers/SubGoals';
import Timer from './src/containers/Timer';

const page = 'Timer';
const homeName = 'Home';
const settingsName = 'Settings';
const statsName = 'Stats';

const Tab = createBottomTabNavigator();

export default function App() {
  //Declare Fonts
  const [soraLoaded] = useSora({
    Sora_700Bold,
  });

  const [nunitoLoaded] = useNunito({
    Nunito_700Bold,
    Nunito_200ExtraLight
  });

  if(!soraLoaded || !nunitoLoaded){
    return null
  }

  // return(
  //   <NavigationContainer>
  //     <Tab.Navigator
  //       initalRouteName={homeName}
  //       screenOptions={({route}) => ({
  //         tabBarIcon:({focused, color, size}) => {
  //           let iconName;
  //           let rn = route.name

  //           if(rn === homeName){
  //             iconName = focused ? 'home' : 'home-outline'
  //           } else if (rn === statsName){
  //             iconName = focused ? 'list' : 'list-outline'
  //           } else if (rn === settingsName){
  //             iconName = focused ? 'settings' : 'settings-outline'
  //           }
  //           return <Ionicons name={iconName} size={size} color={color}/>
  //         },
  //       })}
  //       screenOptions={{
  //         tabBarActiveTintColor: 'red',
  //         tabBarlabelStyle:{
  //           marginBottom: 10
  //         }
  //       }} 
  //     >
    
  //   <Tab.Screen name={homeName} component={Goals}></Tab.Screen>
  //   <Tab.Screen name={statsName} component={Stats}></Tab.Screen>
  //   <Tab.Screen name={settingsName} component={Settings}></Tab.Screen>
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // )
  if(page==='Goals'){
    return(
      <Goals/>
    )
  } else
  if(page === 'Settings'){
    return(
      <Settings/>
    )
  } else
  if(page === 'SignIn'){
    return(
      <SignIn/>
    )
  } else
  if(page === 'Timer'){
    return(
      <Timer goal={'Write Chapter 7'}/>
    )
  }
}
