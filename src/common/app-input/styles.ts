import { theme } from './../../theme/index';

import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: theme.colors.gray,
    minHeight: 50,
    borderRadius: '25@s',
    padding: '10@s',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@vs',
  },

  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    marginLeft: 20,
    color: theme.colors.black,
    fontSize: 18,
    flex: 1,
  },
});

export default styles;
