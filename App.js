import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreeting';
import Blink from './components/Blink';
import FlexView from './components/FlexView';

export default function App() {
  return (
    <View style={styles.container}>
      <FlexView />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
