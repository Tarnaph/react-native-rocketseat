import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
  },
  rightHeader: {
    paddingHorizontal: 5,
  },
  input: {
    backgroundColor: colors.lowLight,
    borderRadius: 5,
    height: 25,
    fontSize: fonts.small,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.darker,
  },
  button: {
    fontSize: fonts.medium,
    color: colors.darker,
    marginLeft: 15,
  },
});

export default styles;
