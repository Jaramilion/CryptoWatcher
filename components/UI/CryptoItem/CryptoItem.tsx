import React from 'react';
import {Text, View} from 'react-native';
import {
  MAIN_LIGHT_COLOR,
  LIGHT_COLOR_TEXT,
  DARK_COLOR_TEXT,
  MAIN_DARK_COLOR,
} from '../../../constants/Colors';
import {CryptoItemStyles} from './CryptoItemStyles';
import {CryptoItemTypes} from './CryptoItemTypes';

const CryptoItem = (props: CryptoItemTypes) => {
  const {name, price} = props;
  return (
    <View
      style={[
        CryptoItemStyles.mainContainer,
        {backgroundColor: MAIN_LIGHT_COLOR},
      ]}>
      <Text style={[CryptoItemStyles.itemText, {color: LIGHT_COLOR_TEXT}]}>
        {name}
      </Text>
      <Text style={[CryptoItemStyles.itemText, {color: LIGHT_COLOR_TEXT}]}>
        ${price.toFixed(2)}
      </Text>
    </View>
  );
};

export default CryptoItem;
