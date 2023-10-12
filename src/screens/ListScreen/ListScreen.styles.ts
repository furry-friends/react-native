import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: Colors.background,
  },

  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flexDirection: 'column',
  },

  noResult: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    color: 'gray',
    padding: 16,
  },

  redText: {
    color: 'red',
  },
});

export default styles;
