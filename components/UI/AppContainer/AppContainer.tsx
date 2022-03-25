import React, {useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  AppState,
  ActivityIndicator,
} from 'react-native';
import {MAIN_DARK_COLOR, MAIN_LIGHT_COLOR} from '../../../constants/Colors';
import {fetchCryptos} from '../../../redux/crypto-actions';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-hooks';
import AlertModal from '../AlertModal';
import {CryptoItemList} from '../CryptoItem/CryptoItem';
import Header from '../Header';
import ListHeader from '../ListHeader';
import {AppContainerStyles} from './AppContainerStyle';

const AppContainer = () => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);
  const errorTriggeredInWS = useAppSelector(
    state => state.ui.errorTriggeredInWS,
  );
  const cryptoArray = useAppSelector(state => state.crypto.cryptoArray);
  const dispatch = useAppDispatch();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    dispatch(fetchCryptos());
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        dispatch(fetchCryptos());
      }
      appState.current = nextAppState;
    });
    return () => {
      subscription.remove();
    };
  }, [dispatch]);

  useEffect(() => {
    const retryFetchCryptosTimeout = setTimeout(() => {
      errorTriggeredInWS && dispatch(fetchCryptos());
    }, 5000);
    return () => {
      clearTimeout(retryFetchCryptosTimeout);
    };
  }, [errorTriggeredInWS, dispatch]);

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
      <AlertModal
        isVisible={errorTriggeredInWS}
        msg={'Ha ocurrido un error de conexion, reconectando'}
      />
      <FlatList
        contentContainerStyle={AppContainerStyles.flatlistContainer}
        data={cryptoArray}
        ListHeaderComponent={() => (
          <ListHeader titleColLeft={'Nombre'} titleColRight={'Precio (USD)'} />
        )}
        renderItem={({item}) => (
          <CryptoItemList
            name={item.name}
            price={item.price}
            interactionType={item.interactionType}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={AppContainerStyles.separator} />
        )}
        ListEmptyComponent={() => <ActivityIndicator size="small" />}
      />
    </SafeAreaView>
  );
};

export default AppContainer;
