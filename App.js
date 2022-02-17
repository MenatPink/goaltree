import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignInPage from './src/containers/SignInPage';

export default function App() {
  return (
    <View style={{flex:1}}>
      <SignInPage/>
    </View>
  );
}
