
import React, { useState } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import useBounceAnimation from '../../../components/useBounceAnimation';
import { IFRAME_URL } from '../Url/iframeurl';
import { LOGO_URL } from '../Url/Logourl';

const ChatBot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);
  const bounceValue = useBounceAnimation(); 

  const toggleChat = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setIsWebViewLoaded(false); 
    }
  };

  const handleLoadEnd = () => {
    setIsWebViewLoaded(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.chatButton} onPress={toggleChat}>
        <Animated.Image
          source={{ uri: LOGO_URL }}
          style={[
            styles.chatLogo, 
            { transform: [{ scale: bounceValue }] } 
          ]} 
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <WebView
            source={{ uri: IFRAME_URL }} 
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadEnd={handleLoadEnd} 
          />
          {isWebViewLoaded && ( 
            <TouchableOpacity style={styles.closeButton} onPress={toggleChat}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  chatButton: {
    padding: 10,
    marginBottom: 20,
    marginRight: 20,
  },
  chatLogo: {
    width: 70,
    height: 70,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  

  closeButton: {
    position: 'absolute',
    top: 18,
    right: "3%",
    padding: 9,
    backgroundColor: '#9ca3af33', 
    borderColor: '#9ca3af33', 
    borderRadius: 5,
    borderWidth: 0, 
  },
 
  closeText: {
    color: 'white',
    fontSize: 10,
  },
  webview: {
    flex: 1,
  },
});

export default ChatBot;

