import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {AlertModalStyles} from './AlertModalStyles';
import {AlertModalTypes} from './AlertModalTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AlertModal = ({isVisible, msg}: AlertModalTypes) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      style={AlertModalStyles.modalContainer}
      visible={isVisible}>
      <View style={AlertModalStyles.viewContainer}>
        <Icon size={50} color="red" name="cloud-alert" />
        <Text style={AlertModalStyles.text} numberOfLines={2}>
          {msg}
        </Text>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default AlertModal;
