import {StyleSheet} from 'react-native';

export const AlertModalStyles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
  viewContainer: {
    height: '30%',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '5%',
    paddingBottom: '15%',
    paddingHorizontal: '15%',
    justifyContent: 'space-evenly',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },
});
