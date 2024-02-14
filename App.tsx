import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import BottomBar from './src/Navigation/BottomBar';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import { NativeBaseProvider } from 'native-base';
export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NativeBaseProvider>
      <Provider store={store}>
    <BottomBar/>
    </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
