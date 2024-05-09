import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import AppRoutes from './src/navigation/routes/AppRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AppRoutes />
        <StatusBar style='auto' />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
