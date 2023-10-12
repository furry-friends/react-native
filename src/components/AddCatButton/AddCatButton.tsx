import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../../assets';
import styles from './AddCatButton.styles';

interface AddCatButtonProps {
  onPress: () => void;
}

const AddCatButton: React.FC<AddCatButtonProps> = ({
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={icons.add} resizeMode="contain" style={styles.icon} />
        <Text style={styles.text}>Add</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddCatButton;
