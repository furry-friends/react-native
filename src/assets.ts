/**
 * This file contains all the assets from assets folder.
 */

import { ImageSourcePropType } from 'react-native';

type ImageMap = { [key: string]: ImageSourcePropType };

/**
 * Icons from assets/icons folder.
 */
const icons: ImageMap = {
  logo: require('./assets/icons/logo.png'),
  add: require('./assets/icons/add.png'),
  boy: require('./assets/icons/boy.png'),
  delete: require('./assets/icons/delete.png'),
  edit: require('./assets/icons/edit.png'),
  girl: require('./assets/icons/girl.png'),
  magnifier: require('./assets/icons/magnifier.png'),
};

export { icons };
