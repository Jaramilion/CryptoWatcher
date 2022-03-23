import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CryptoItem from './components/UI/CryptoItem';
import Header from './components/UI/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
