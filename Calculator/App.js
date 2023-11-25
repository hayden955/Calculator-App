import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator</Text>
      <Text style={styles.description}>A React Native Project by Hayden Jennings</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    textTransform: 'uppercase',
    fontSize: 12,
  },
});



//
//import { useState } from 'react';
//import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
//import { myColors } from './src/styles/colors';
//import { ThemeContext } from './src/context/ThemeContext';
//
//export default function App(){
//  const [theme, setTheme] = useState('light');
//  return (
//    <ThemeContext.Provider value={theme}>
//      <SafeAreaView style={theme === 'light' ? styles.container: [styles.container, {backgroundColor: 'black'}]}>
//        <Switch
//          value={theme === 'dark'}
//          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//          ios_backgroundColor="black"
//        />
//      </SafeAreaView>
//    </ThemeContext.Provider>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: myColors.light,
//    alignItems: 'center',
//    justifyContent: 'flex-start',
//  }
//})
//