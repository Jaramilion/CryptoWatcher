import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  MAIN_LIGHT_COLOR,
  MAIN_DARK_COLOR,
  LIGHT_COLOR_TEXT,
  DARK_COLOR_TEXT,
} from '../../../constants/Colors';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-hooks';
import {uiActions} from '../../../redux/ui-reducer';
import {HeaderStyles} from './HeaderStyles';
import {HeaderTypes} from './HeaderTypes';

const Header = (props: HeaderTypes) => {
  const {title} = props;
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);
  const dispatch = useAppDispatch();

  const onChangeModeHandler = () => {
    dispatch(uiActions.toggleMode());
  };

  return (
    <View
      style={[
        HeaderStyles.headerContainer,
        {
          backgroundColor: isLightModeActive
            ? MAIN_LIGHT_COLOR
            : MAIN_DARK_COLOR,
        },
      ]}>
      <Text
        style={[
          HeaderStyles.headerText,
          {
            color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT,
          },
        ]}>
        {title || 'Hola, Bienvenide'}
      </Text>
      <View style={HeaderStyles.btnMode}>
        <Button
          onPress={onChangeModeHandler}
          title={isLightModeActive ? 'Dark mode' : 'Light mode'}
        />
      </View>
    </View>
  );
};

export default Header;
