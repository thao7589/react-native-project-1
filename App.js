import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreeting';
import Blink from './components/Blink';
import FlexView from './components/FlexView';
import Email from './components/Email';
import Button from './components/NativeButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Button />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
