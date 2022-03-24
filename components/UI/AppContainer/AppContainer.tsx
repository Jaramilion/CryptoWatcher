import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {MAIN_DARK_COLOR, MAIN_LIGHT_COLOR} from '../../../constants/Colors';
import {cryptoManager} from '../../../redux/crypto-actions';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-hooks';
import CryptoItem from '../CryptoItem';
import {CryptoItemList} from '../CryptoItem/CryptoItem';
import Header from '../Header';
import ListHeader from '../ListHeader';
import {AppContainerStyles} from './AppContainerStyle';

const AppContainer = () => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);
  const cryptoArray = useAppSelector(state => state.crypto.cryptoArray);
  const dispatch = useAppDispatch();
  const pricesWs = new WebSocket(
    'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin',
  );
  useEffect(() => {
    pricesWs.onmessage = function (msg) {
      dispatch(cryptoManager(msg.data));
    };
  }, []);

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
      {console.log(cryptoArray)}
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
      />
    </SafeAreaView>
  );
};

export default AppContainer;
