import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {AlertModalStyles} from './AlertModalStyles';
import {AlertModalTypes} from './AlertModalTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector} from '../../../redux/redux-hooks';
import {
  DARK_COLOR_TEXT,
  LIGHT_COLOR_TEXT,
  MAIN_DARK_COLOR,
  MAIN_LIGHT_COLOR,
  SECONDARY_DARK_COLOR,
} from '../../../constants/Colors';

const AlertModal = ({isVisible, msg}: AlertModalTypes) => {
  const isLightModeActive = useAppSelector(state => state.ui.isLightModeActive);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      style={AlertModalStyles.modalContainer}
      visible={isVisible}>
      <View
        style={[
          AlertModalStyles.viewContainer,
          {
            backgroundColor: isLightModeActive
              ? MAIN_LIGHT_COLOR
              : SECONDARY_DARK_COLOR,
          },
        ]}>
        <Icon size={50} color="red" name="cloud-alert" />
        <Text
          style={[
            AlertModalStyles.text,
            {
              color: isLightModeActive ? LIGHT_COLOR_TEXT : DARK_COLOR_TEXT,
            },
          ]}
          numberOfLines={2}>
          {msg}
        </Text>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default AlertModal;
