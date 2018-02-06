import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    padding: metrics.basePadding,
  },

  card: {
    elevation: 10,
  },

});

export default styles;
