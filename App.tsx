import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './src/screens/Home/Home';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <View style={styles.centeredView}>
          <Home />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
