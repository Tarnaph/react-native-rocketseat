import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  callout: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.white,
  },

  card: {
    padding: 10,
    minHeight: 5,
    minWidth: 200,
    borderRadius: 5,
    backgroundColor: colors.white,
    zIndex: 1,
  },

  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  headerCardRight: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignContent: 'center',
  },

  headerCardLeft: {
    alignSelf: 'flex-start',
  },

  iconGithub: {
    color: colors.dark,
    fontSize: fonts.small,
    alignSelf: 'flex-end',
  },

  iconName: {
    color: colors.warning,
    fontSize: fonts.small,
    marginHorizontal: 3,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  name: {
    color: colors.warning,
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  infos: {
    color: colors.dark,
    fontSize: fonts.tiny,
  },

  bio: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: fonts.smaller,
    marginTop: 7,
    marginBottom: 10,
  },

  btnTrash: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
