import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ChatBot from './app/screens/chat/Chatbot.js';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ChatBot /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: 'white',
  },
});

export default App;
