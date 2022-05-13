import {StyleSheet} from 'react-native';
import {DARK, LIGHT} from './modes';
import {chooseColor} from '../components/Functions';

export const styles_NewNote = StyleSheet.create({
  container: {
    backgroundColor: chooseColor(LIGHT.containerColor, DARK.containerColor),
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title_container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '20%',
  },
  title: {
    width: '80%',
    height: '100%',
    backgroundColor: chooseColor(LIGHT.backgroundColor, DARK.backgroundColor),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {height: 5, width: 3},
    shadowOpacity: 0.2,
    padding: 5,
  },
  text_label: {
    height: 40,
    margin: '2%',
    textAlign: 'left',
    width: '80%',
    fontSize: 30,
    color: chooseColor(LIGHT.text, DARK.text),
  },
  description_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
  description: {
    width: '80%',
    backgroundColor: chooseColor(LIGHT.backgroundColor, DARK.backgroundColor),
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {height: 5, width: 3},
    shadowOpacity: 0.2,
    padding: 8,
  },
  starsView: {
    marginTop: '10%',
  },
  button_container: {
    height: '20%',
    margin: '10%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  add_button: {
    backgroundColor: '#34eb80',
    width: '50%',
    height: '40%',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {height: 4, width: 3},
  },
  text: {
    color: chooseColor(LIGHT.text, DARK.text),
    textAlignVertical: 'top',
  },
  placeholderColor: chooseColor(LIGHT.placeholderColor, DARK.placeholderColor),
  button_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
  },
  stars: {
    tintColor: chooseColor(LIGHT.tintColor, DARK.tintColor),
    ratingBackgroundColor: chooseColor(
      LIGHT.ratingBackgroundColor,
      DARK.ratingBackgroundColor,
    ),
    ratingColor: chooseColor(LIGHT.ratingColor, DARK.ratingColor),
  },
});
