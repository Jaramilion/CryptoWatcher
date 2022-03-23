import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  MAIN_LIGHT_COLOR,
  MAIN_DARK_COLOR,
  LIGHT_COLOR_TEXT,
  DARK_COLOR_TEXT,
} from '../../../constants/Colors';
import {HeaderStyles} from './HeaderStyles';
import {HeaderTypes} from './HeaderTypes';

const Header = (props: HeaderTypes) => {
  const {title} = props;
  return (
    <View
      style={[
        HeaderStyles.headerContainer,
        {backgroundColor: MAIN_LIGHT_COLOR},
      ]}>
      <Text style={[HeaderStyles.headerText, {color: LIGHT_COLOR_TEXT}]}>
        {title || 'Hola, Bienvenide'}
      </Text>
      <View style={HeaderStyles.btnMode}>
        <Button title={'Light'} />
      </View>
    </View>
  );
};

export default Header;
