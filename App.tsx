/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import CustomIcon from './src/components/CustomIcon';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* <NewAppScreen templateFileName="App.tsx" /> */}
      <Text>Hello</Text>
      <CustomIcon name="like" size={15} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     flexDirection:"row",
     justifyContent:"center",
     alignItems:"center",
     gap:10,
  },
});

export default App;
