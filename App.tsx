import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/theme';
import Router from './src/navigation/router';
import useCustomFonts from './src/hooks/useCustomFonts';

export default function App() {
  const [fontsLoaded, fontError] = useCustomFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
}
