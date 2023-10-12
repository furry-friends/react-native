import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './IconButton.styles';

interface IconButtonProps {
  icon: ImageSourcePropType;
  size?: number;
  iconSize: number;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  iconSize,
  size,
}): JSX.Element => {
  size = size || 40;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: size,
          height: size,
          ...styles.container,
        }}>
        <Image
          source={icon}
          style={{
            width: iconSize,
            height: iconSize,
          }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
