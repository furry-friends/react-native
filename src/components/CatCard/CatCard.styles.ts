import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: '38%',
  },
  main: {
    flexGrow: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  birthday: {
    fontSize: 14,
    color: '#999',
    marginBottom: 12,
  },

  bio: {
    fontSize: 16,
    lineHeight: 22,
  },

  buttons: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default styles;
