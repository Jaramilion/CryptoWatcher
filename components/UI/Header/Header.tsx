import React from 'react';
import {Text, View} from 'react-native';
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
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({title}: HeaderTypes) => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);
  const lastestUpdate = useAppSelector(state => state.crypto.latestUpdate);
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
        {title || 'Title placeholder'}
      </Text>
      <Text
        style={[
          HeaderStyles.updateText,
          {
            color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT,
          },
        ]}>
        Ultima actualizacion: {lastestUpdate}
      </Text>
      <View style={HeaderStyles.btnMode}>
        <Icon.Button
          backgroundColor={
            isLightModeActive ? MAIN_DARK_COLOR : MAIN_LIGHT_COLOR
          }
          style={HeaderStyles.icon}
          onPress={onChangeModeHandler}
          color={isLightModeActive ? MAIN_LIGHT_COLOR : MAIN_DARK_COLOR}
          name={isLightModeActive ? 'moon' : 'light-up'}
          size={20}
        />
      </View>
    </View>
  );
};

export default Header;
