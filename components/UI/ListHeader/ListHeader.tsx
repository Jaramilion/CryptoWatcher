import React from 'react';
import {Text, View} from 'react-native';
import {DARK_COLOR_TEXT, LIGHT_COLOR_TEXT} from '../../../constants/Colors';
import {useAppSelector} from '../../../redux/redux-hooks';
import {AppContainerStyles} from '../AppContainer/AppContainerStyle';
import {ListHeaderStyles} from './ListHeaderStyles';
import {ListHeaderTypes} from './ListHeaderTypes';

const ListHeader = ({titleColLeft, titleColRight}: ListHeaderTypes) => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);
  return (
    <>
      <Text
        style={[
          ListHeaderStyles.tableDescription,
          {color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT},
        ]}>
        Listado de cripto monedas
      </Text>
      <View style={AppContainerStyles.separator} />

      <View style={ListHeaderStyles.listHeaderContainer}>
        <Text
          style={[
            ListHeaderStyles.listHeaderTitleText,
            {
              color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT,
            },
          ]}>
          {titleColLeft}
        </Text>
        <Text
          style={[
            ListHeaderStyles.listHeaderTitleText,
            {
              color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT,
            },
          ]}>
          {titleColRight}
        </Text>
      </View>
      <View style={AppContainerStyles.separator} />
    </>
  );
};

export default ListHeader;
