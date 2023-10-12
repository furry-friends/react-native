import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

const styles = StyleSheet.create({
  container: {
    height: 52,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },

  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  magnifier: {
    width: 20,
    height: 20,
  },

  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});

export default styles;
