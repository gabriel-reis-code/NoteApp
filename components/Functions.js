import {Appearance} from 'react-native';

export const colorScheme = Appearance.getColorScheme();

export const chooseColor = (light, dark) => {
  if (colorScheme === 'light') {
    return light;
  } else {
    return dark;
  }
};
