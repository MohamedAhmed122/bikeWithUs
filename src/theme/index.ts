import { DefaultTheme } from 'react-native-paper';

export const COLORS = {
  primary: '#186B8C',

  secondary: '#4EBF7F',

  orange: '#F29E38',

  darkOrange: '#F28729',

  quicksilver: '#9c9c9c',

  blue: '#55C1D9',

  red: '#F23827',

  danger: '#FF685C',

  dark: '#000',

  lightGray: '#eaeaea',

  lightGrey: '#D9D9D9',

  darkGray: '#6e6969',

  white: '#fff',

  gray: '#EFEFEF',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...COLORS,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
  },
};
