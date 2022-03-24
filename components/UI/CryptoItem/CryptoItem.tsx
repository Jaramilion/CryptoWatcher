import React, {useEffect, useState} from 'react';
import {Text, View, Animated} from 'react-native';
import {
  MAIN_LIGHT_COLOR,
  LIGHT_COLOR_TEXT,
  DARK_COLOR_TEXT,
  MAIN_DARK_COLOR,
  INCREMENT_COLOR_TEXT,
  DECREMENT_COLOR_TEXT,
} from '../../../constants/Colors';
import {useAppSelector} from '../../../redux/redux-hooks';
import {CryptoItemStyles} from './CryptoItemStyles';
import {CryptoItemTypes} from './CryptoItemTypes';

const CryptoItem = ({name, price, style, interactionType}: CryptoItemTypes) => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  useEffect(() => {
    if (interactionType === 'increment') {
      setBackgroundColor(INCREMENT_COLOR_TEXT);
    }
    if (interactionType === 'decrement') {
      setBackgroundColor(DECREMENT_COLOR_TEXT);
    }
    const delayBackgroundTimer = setTimeout(() => {
      setBackgroundColor('transparent');
    }, 300);

    return () => clearTimeout(delayBackgroundTimer);
  }, [price, interactionType]);

  return (
    <View
      style={[
        CryptoItemStyles.mainContainer,
        {...style},
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text
        style={[
          CryptoItemStyles.itemText,
          {color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT},
        ]}>
        {name}
      </Text>
      <Text
        style={[
          CryptoItemStyles.itemText,
          {color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT},
        ]}>
        ${price}
      </Text>
    </View>
  );
};

export default CryptoItem;
export const CryptoItemList = React.memo(CryptoItem);
