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
