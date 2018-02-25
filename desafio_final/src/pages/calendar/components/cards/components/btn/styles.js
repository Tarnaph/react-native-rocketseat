import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },

  share: {
    backgroundColor: colors.success,
  },

  remove: {
    backgroundColor: colors.danger,
  },
});

export default styles;
