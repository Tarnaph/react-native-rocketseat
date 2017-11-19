import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  card: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
    padding: 20,
    backgroundColor: colors.BG_WHITE,
    shadowColor: colors.SHADOW,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  title: {
    color: colors.TITLE_CARD,
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  autor: {
    color: colors.AUTHOR,
  },
  hr: {
    borderTopWidth: 1,
    borderColor: colors.BORDER_COLOR,
    marginTop: 10,
  },
  description: {
    color: colors.DESCRIPTOIN_CARD,
    marginTop: 10,
    lineHeight: 19,
  },
});
