import React from 'react';
import {Text, View} from 'react-native';

import styles from './CatCard.styles';
import IconButton from '../IconButton/IconButton';
import {icons} from '../../assets';

interface CatCardProps {}

const CatCard: React.FC<CatCardProps> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>Image</Text>
      </View>

      <View style={styles.main}>
        <View>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.birthday}>Birthday: 2023-10-12</Text>
          <Text style={styles.bio}>Bio</Text>
        </View>

        <View style={styles.buttons}>
          <IconButton
            icon={icons.edit}
            iconSize={13}
            onPress={(): void => {
              console.log('TODO: edit');
            }}
          />

          <IconButton
            icon={icons.delete}
            iconSize={12}
            onPress={(): void => {
              console.log('TODO: delete');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CatCard;
