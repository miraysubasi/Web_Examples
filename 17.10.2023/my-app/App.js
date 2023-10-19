import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginContainer from './src/pages/login';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <LoginContainer/>
    </SafeAreaView>
  );
  
}

