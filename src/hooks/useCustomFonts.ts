import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [fontsLoaded, fontError] = useFonts({
    'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
  });

  return [fontsLoaded, fontError];
}
