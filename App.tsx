import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert, View, Text, StyleSheet } from 'react-native';

const App = () => {
  useEffect(() => {
    // Request notification permission
    messaging()
      .requestPermission()
      .then(authStatus => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      });

    // Get FCM token
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token);
      });

    // Listen for foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('New Notification', remoteMessage.notification?.title ?? 'No title');
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Push Notification App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;

