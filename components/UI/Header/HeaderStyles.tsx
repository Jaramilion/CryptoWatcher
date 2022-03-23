import {StyleSheet} from 'react-native';

export const HeaderStyles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: '100%',
    borderBottomColor: '#DEDDDD',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnMode: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
});
