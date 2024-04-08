import { DefaultTheme } from 'react-native-paper';

const colors = {
  dark: '#222222',
  darkGrey: '#26342B',
  pure: '#FFEDD0',
  white: '#FFF',
  grey: '#ABABAB',
  lightGrey: '#DDDDDD',
  veryLightAccent: '#E4F1E0',
  heavyMetal: '#26342B',
  error: '#FF1F00',
  brand: {
    green: '#4CA22F',
    lightGreen: '#69C64A',
    blue: '#28BDEC',
    orange: '#FB9748',
    yellow: '#FFBD57',
    translucentGreen: '#F0F7ED',
  },
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
    primary: colors.brand.green,
    secondary: colors.brand.orange,
    disabled: colors.grey,
    searchBg: colors.white,
    success: colors.brand?.green,
  },
};
