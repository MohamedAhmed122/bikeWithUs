import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../../theme';

export const coverStyles = ScaledSheet.create({
  background: {
    overflow: 'hidden',
    width: '100%',
    height: '200@mvs',
  },
  counterContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '15@mvs',
  },
  counterText: {
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: '45@mvs',
    fontWeight: '600',
  },
  whiteText: {
    color: theme.colors.white,
  },
});

export const infoStyle = ScaledSheet.create({
  whiteText: {
    color: theme.colors.white,
  },
  dateSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10@mvs',
    marginHorizontal: '16@ms',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  priceContainer: {
    marginHorizontal: 10,
    width: '50@ms',
    height: '50@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    color: theme.colors.primary,
    marginTop: 'auto',
    fontWeight: '700',
  },
  dateContainer: {
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
  dateText: {
    color: theme.colors.white,
    fontWeight: '700',
  },
  organizerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '16@ms',
  },
  organizerText: {
    marginLeft: '10@ms',
    color: theme.colors.darkGray,
    fontSize: 16,
  },
});
