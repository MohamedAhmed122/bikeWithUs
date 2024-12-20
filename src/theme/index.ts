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

  black: '#000',

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
// <co-pilot platform-id="bd5a6410-61a5-4b56-869a-c08863e97de3" user-id="9a9a6d81-474c-4381-8b8f-592080ef03b3" chatbot-id="3e945cb5-3ffa-4225-9c19-424890d375a4" is-local="false" ><a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">AI Nav</a></co-pilot> <script src="https://cdn.chatsimple.ai/ai-loader.js" defer></script>
