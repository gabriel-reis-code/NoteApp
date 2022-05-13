import {StyleSheet} from 'react-native';
import {chooseColor} from '../components/Functions';
import {DARK, LIGHT} from './modes';

export const style_Home = StyleSheet.create({
  container: {
    backgroundColor: chooseColor(LIGHT.containerColor, DARK.containerColor),
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  notes_resume: {
    width: '100%',
    height: 'auto',
  },
  add_note: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus_text: {
    height: '100%',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 60,
  },
  container_add_button: {
    position: 'absolute',
    right: '10%',
    bottom: '10%',
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#34eb80',
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 4},
    shadowOpacity: 0.2,
  },
  preview: {
    titleColor: chooseColor(LIGHT.text, DARK.text),
    tintColor: chooseColor(LIGHT.backgroundColor, DARK.backgroundColor),
    backgroundColor: chooseColor(LIGHT.backgroundColor, DARK.backgroundColor),
    ratingColor: chooseColor(LIGHT.ratingColor, DARK.ratingColor),
    ratingBackgroundColor: chooseColor(
      LIGHT.ratingBackgroundColor,
      DARK.ratingBackgroundColor,
    ),
  },
});
