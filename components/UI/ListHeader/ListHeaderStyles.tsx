import {StyleSheet} from 'react-native';

export const ListHeaderStyles = StyleSheet.create({
  listHeaderContainer: {
    paddingTop: '4%',
    paddingBottom: '3%',
    paddingHorizontal: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listHeaderTitleText: {
    fontWeight: 'bold',
  },
  tableDescription: {
    fontSize: 16,
    alignSelf: 'center',
    paddingVertical: '2%',
  },
});
