import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
    backgroundColor: colors.light,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    borderTopWidth: 0,
  },
  tab: {
    color: colors.dark,
    fontSize: fonts.small,
  },
  active: {
    fontWeight: 'bold',
  },
  loading: {
    alignSelf: 'center',
  },
});

export default styles;
