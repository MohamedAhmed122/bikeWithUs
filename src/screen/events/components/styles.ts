import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../theme';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const eventCardStyle = ScaledSheet.create({
  container: {
    borderColor: theme.colors.lightGray,
    borderWidth: 1,
    margin: '15@s',
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
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    marginRight: '10@s',
    width: 45,
    height: 45,
  },
  avatar: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    margin: '10@s',
  },
  username: {
    fontSize: 21,
    color: theme.colors.primary,
  },
  desc: {
    fontSize: 18,
    width: '90%',
    marginBottom: 10,
  },
  likeContainer: {
    flexDirection: 'row',
    marginHorizontal: '20@s',
    justifyContent: 'space-between',
    marginVertical: '10@vs',
  },
  cardContent: {
    marginLeft: '5%',
  },
});

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

export const tabStyles = ScaledSheet.create({
  container: {
    width: width - 50,
    marginLeft: '25@ms',
    marginBottom: '15@mvs',
    marginTop: '15@mvs',
    borderRadius: 15,
    height: '50@s',
    borderWidth: 2,
    borderColor: theme.colors.gray,
    shadowColor: theme.colors.quicksilver,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tab: {
    height: '50@s',
    justifyContent: 'center',
    width: (width - 44) / 2,
    alignItems: 'center',
    borderLeftColor: theme.colors.gray,
    borderLeftWidth: 3,
  },
  activeTab: {
    overflow: 'hidden',
    height: '50@s',
    justifyContent: 'center',
    width: (width - 44) / 2,
    alignItems: 'center',
    borderLeftColor: theme.colors.gray,
    borderLeftWidth: 3,
    backgroundColor: theme.colors.gray,
  },

  TabLeft: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  tabRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
