import {StyleSheet} from 'react-native';

export const styles_UpperMenu = StyleSheet.create({
  textLabel: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    marginTop: '10%',
    height: '10%',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 20,
  },
  returnButton: {
    height: '100%',
    width: '25%',
  },
  pageTitle: {
    height: '100%',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    height: '100%',
    width: '25%',
  },
});
