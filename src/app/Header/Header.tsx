import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Header.styles';
import {icons} from '../../assets';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={icons.logo}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Furry Friends</Text>
      </View>
      <Image
        source={icons.magnifier}
        resizeMode="contain"
        style={styles.magnifier}
      />
    </View>
  );
};

export default Header;
