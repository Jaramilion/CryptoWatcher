import {StyleSheet} from 'react-native';

export const HeaderStyles = StyleSheet.create({
  headerContainer: {
    height: 70,
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
    top: 15,
    right: 5,
  },
  updateText: {
    fontStyle: 'italic',
    fontSize: 11,
    marginTop: 4,
  },
  icon: {
    height: 40,
    width: 40,
    paddingRight: 0,
    paddingLeft: 10,
  },
});
