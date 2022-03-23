import React from 'react';
import {SafeAreaView} from 'react-native';
import {MAIN_DARK_COLOR, MAIN_LIGHT_COLOR} from '../../../constants/Colors';
import {useAppSelector} from '../../../redux/redux-hooks';
import CryptoItem from '../CryptoItem';
import Header from '../Header';
import {AppContainerStyles} from './AppContainerStyle';

const AppContainer = () => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);

  return (
    <SafeAreaView
      style={[
        AppContainerStyles.rootContainer,
        {
          backgroundColor: isLightModeActive
            ? MAIN_LIGHT_COLOR
            : MAIN_DARK_COLOR,
        },
      ]}>
      <Header title={'CoinCap Market'} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
      <CryptoItem name={'Bitcoin'} price={42000} />
    </SafeAreaView>
  );
};

export default AppContainer;
