/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from '../config';
import Header from './Header/Header';
import ListScreen from '../screens/ListScreen/ListScreen';
import { CatProvider } from '../states/cats';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.primary,
  };

  return (
    <CatProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Header />
        <ListScreen />
      </SafeAreaView>
    </CatProvider>
  );
};

export default App;
