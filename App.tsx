import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Home from './src/screens/Home/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
