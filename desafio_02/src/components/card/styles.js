import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    height: 80,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#333333',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginVertical: 5,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22.5,

  },
  iconRight: {
    fontSize: 15,
    color: '#EEEEEE',
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    paddingLeft: 20,
  },
  description: {
    fontSize: 12,
    color: '#a0a0a0',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
});

export default styles;
