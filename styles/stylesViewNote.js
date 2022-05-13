import {StyleSheet} from 'react-native';
import {chooseColor} from '../components/Functions';
import {DARK, LIGHT} from './modes';

export const styles_ViewNote = StyleSheet.create({
  container: {
    backgroundColor: chooseColor(LIGHT.containerColor, DARK.containerColor),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
  },
  // content: {
  //   width: '50%',
  //   margin: '10%',
  //   marginBottom: '5%',
  //   maxHeight: '20%',
  //   color: chooseColor(LIGHT.text, DARK.text),
  //   fontWeight: '400',
  //   fontSize: 35,
  //   textDecorationLine: 'underline',
  //   backgroundColor: 'black',
  //   // zIndex: 0
  // },
  content: {
    width: '80%',
    maxHeight: '20%',
    margin: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_container: {
    width: 'auto',
    alignSelf: 'flex-end',
    color: chooseColor(LIGHT.text, DARK.text),
    fontWeight: '400',
    fontSize: 35,
    textDecorationLine: 'underline',
  },
  title_style: {
    color: chooseColor(LIGHT.text, DARK.text),
    fontWeight: '400',
    fontSize: 35,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 20,
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: chooseColor(LIGHT.backgroundColor, DARK.backgroundColor),
    borderRadius: 30,
    padding: '5%',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 4, height: 5},
  },
  description_container: {
    width: '100%',
    height: '50%',
  },
  rate_stars: {
    margin: '5%',
  },
  delete_button: {
    margin: '5%',
    width: '50%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#bf1b4f',
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 3},
    shadowOpacity: 0.2,
  },
  button_text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '300',
  },
  text: {
    fontSize: 18,
    paddingBottom: '15%',
    color: chooseColor(LIGHT.text, DARK.text),
  },
  stars: {
    tintColor: chooseColor(LIGHT.tintColor, DARK.tintColor),
    ratingBackgroundColor: chooseColor(
      LIGHT.ratingBackgroundColor,
      DARK.ratingBackgroundColor,
    ),
    ratingColor: chooseColor(LIGHT.ratingColor, DARK.ratingColor),
  },
  share_container: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    backgroundColor: chooseColor(LIGHT.shareBackground, DARK.shareBackground),
    borderRadius: 15,

  },
  share_text: {
    color: chooseColor(LIGHT.text, DARK.text),
  },
})
