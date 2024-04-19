import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../theme';

export const joinerStyles = ScaledSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10@mvs',
  },

  line: {
    height: 1,
    backgroundColor: 'gray',
    width: '30%',
  },
  joinerText: {
    textAlign: 'center',
    width: '40%',
    color: theme.colors.primary,
  },
  joinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    marginTop: '10@mvs',
    marginLeft: '18@ms',
  },
  avatar: {
    width: '60@ms',
    height: '60@ms',
    borderRadius: '30@ms',
    borderColor: theme.colors.orange,
    borderWidth: 3,
  },
});
