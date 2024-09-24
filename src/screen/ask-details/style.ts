import { ScaledSheet } from 'react-native-size-matters';
import { theme } from './../../theme';

export const askDetailsStyle = ScaledSheet.create({
  askDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10@mvs',
    marginHorizontal: '16@ms',
    alignItems: 'center',
  },

  askDetailsText: {
    fontSize: 20,
    fontWeight: '500',
    color: theme.colors.black,
  },
  dateSectionContainer: {
    width: '50@ms',
    height: '50@ms',
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dateDetailText: {
    color: theme.colors.white,
    fontWeight: '500',
  },
  avatar: {
    borderColor: theme.colors.white,
    borderWidth: 2,
    width: '30@s',
    height: '30@s',
    borderRadius: '10@s',
    margin: '10@s',
    shadowColor: '#000000AB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  infoAskContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: '16@ms',
    alignItems: 'center',
  },
  infoDetailsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  infoAskDescriptionContainer: {
    justifyContent: 'center',
    marginTop: '2@mvs',
    marginHorizontal: '16@ms',
    alignItems: 'center',
    width: 'auto',
    height: 100,
    borderColor: theme.colors.lightGray,
    borderWidth: 1.5,
    backgroundColor: theme.colors.white,
    borderRadius: 7,
    margin: '10@s',
  },
  askDescription: {
    fontSize: 18,
    fontWeight: '400',
    margin: 4,
  },
  inbox: {
    marginBottom: 0,
    marginTop: -10,
  },
  CommentStyleList: {
    margin: 20,
  },

  postNameText: {
    color: theme.colors.darkGray,
    fontSize: 12,
  },
});
