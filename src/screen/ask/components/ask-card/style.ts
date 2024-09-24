import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../../theme';

export const askCardStyle = ScaledSheet.create({
  container: {
    borderColor: theme.colors.lightGray,
    borderWidth: 1,
    margin: '10@s',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: '40@s',
    height: '40@s',
    borderRadius: '10@s',
    margin: '10@s',
  },
  username: {
    fontSize: 18,
    color: theme.colors.primary,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    marginRight: '10@s',
    width: 45,
    height: 45,
  },
  desc: {
    fontSize: 15,
    width: '90%',
    marginBottom: 10,
  },
  titleForAsk: { fontSize: 15, width: '90%', marginBottom: 10, fontWeight: 'bold' },
  likeContainer: {
    flexDirection: 'row',
    marginHorizontal: '20@s',
    justifyContent: 'space-between',
    marginVertical: '10@vs',
  },
  cardContent: {
    marginLeft: '5%',
  },
  dateStyle: {
    fontSize: 12,
    color: theme.colors.darkGray,
    marginRight: '5%',
  },
});
