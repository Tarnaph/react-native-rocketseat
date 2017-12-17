import { StyleSheet } from 'react-native';
import { colors, fonts, metrics, general } from 'styles';

const styles = StyleSheet.create({
  ...general,

  headerContainer: {
    paddingBottom: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighter,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ownerContainer: {
    flexDirection: 'row',
  },

  ownerImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  ownerInformationContainer: {
    marginLeft: metrics.smallMargin,
    justifyContent: 'center',
  },

  ownerTitle: {
    fontSize: fonts.small,
    color: colors.regular,
    fontWeight: 'bold',
  },

  ownerText: {
    fontSize: fonts.regular,
    color: colors.darker,
    fontWeight: 'bold',
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  linkText: {
    fontSize: fonts.small,
    color: colors.regular,
  },

  linkIcon: {
    color: colors.regular,
    marginLeft: metrics.tinyMargin,
  },

  repositoryContent: {
    paddingVertical: metrics.basePadding,
    alignItems: 'center',
  },

  repositoryTitle: {
    fontSize: fonts.big,
    color: colors.darker,
    fontWeight: 'bold',
  },

  repositoryDescription: {
    fontSize: fonts.regular,
    color: colors.regular,
    marginTop: metrics.smallMargin,
    textAlign: 'center',
    lineHeight: 24,
  },

  repositoryInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: metrics.smallMargin,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.smallMargin,
  },

  infoIcon: {
    color: colors.dark,
    marginRight: metrics.tinyMargin,
  },

  infoText: {
    fontSize: fonts.small,
    color: colors.dark,
  },

  trashIcon: {
    color: colors.white,
  },

  buttonsContainer: {
    paddingTop: metrics.basePadding,
    borderTopWidth: 1,
    borderTopColor: colors.lighter,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftButton: {
    marginRight: metrics.smallMargin,
  },

  rightButton: {
    marginLeft: metrics.smallMargin,
  },
});

export default styles;
