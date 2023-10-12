import { StyleSheet } from 'react-native';
import catCardStyles from '../CatCard/CatCard.styles';

const styles = StyleSheet.create({
  container: {
    ...catCardStyles.container,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 50,
  },

  icon: {
    width: 30,
    height: 30,
  },

  text: {
    marginTop: 12,
    fontSize: 18,
  },
});

export default styles;
