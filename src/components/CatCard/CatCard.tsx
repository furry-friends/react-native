import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';

import styles from './CatCard.styles';
import IconButton from '../IconButton/IconButton';
import { icons } from '../../assets';
import { Cat, CatContext } from 'frontend-lib';
import catRepository from '../../repositories/catRepository';

interface CatCardProps {
  cat: Cat;
  onEdit: (cat: Cat) => void;
}

const CatCard: React.FC<CatCardProps> = ({ cat, onEdit }): JSX.Element => {
  const { deleteCat } = useContext(CatContext);

  const handleDelete = async (): Promise<void> => {
    deleteCat(cat.id);
    await catRepository.delete(cat.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.image} />

      <View style={styles.main}>
        <View>
          <Text style={styles.name}>
            {cat.name}
            <Image
              style={styles.gender}
              source={icons[cat.gender]}
              resizeMode="contain"
            />
          </Text>
          <Text style={styles.birthday}>Birthday: {cat.birthday}</Text>
          <Text style={styles.bio}>{cat.bio}</Text>
        </View>

        <View style={styles.buttons}>
          <IconButton
            icon={icons.edit}
            iconSize={13}
            onPress={(): void => onEdit(cat)}
          />

          <IconButton
            icon={icons.delete}
            iconSize={12}
            onPress={handleDelete}
          />
        </View>
      </View>
    </View>
  );
};

export default CatCard;
