import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
    alignSelf: 'center',
  },
});

export default styles;
