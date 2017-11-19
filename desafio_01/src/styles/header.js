import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.BG_WHITE,
    shadowColor: colors.SHADOW,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  title: {
    color: colors.TITLE_CARD,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
  },
});
