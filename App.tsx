import { StyleSheet } from 'react-native';
import React from 'react';
import GameScreen from './src/Slider';

export default function App() {
  return <GameScreen />;
}

const styles = StyleSheet.create({});

// import { NavigationContainer } from '@react-navigation/native';
// import { PaperProvider } from 'react-native-paper';
// import useCustomFonts from './src/hooks/useCustomFonts';
// import Router from './src/navigation/router';
// import { theme } from './src/theme';

// export default function App() {
//   const [fontsLoaded, fontError] = useCustomFonts();

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }

//   return (
//     <PaperProvider theme={theme}>
//       <NavigationContainer>
//         <Router />
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }
