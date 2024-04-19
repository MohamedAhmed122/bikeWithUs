import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const profileHeaderStyles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 1000,
    marginTop: -800,
  },
  profileImageContainer: {
    marginTop: -50,
    height: 50,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    alignSelf: 'center',
    marginTop: -120,
  },
  iconContent: {},
  iconContainer: {
    backgroundColor: 'white',
    margin: 10,
    width: 60,
    height: 60,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
