import React from 'react';
import {ScrollView, View} from 'react-native';
import CatCard from '../../components/CatCard/CatCard';

import styles from './ListScreen.styles';
import AddCatButton from '../../components/AddCatButton/AddCatButton';

interface ListScreenProps {}

const ListScreen: React.FC<ListScreenProps> = (): JSX.Element => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <CatCard />
        <CatCard />
        <CatCard />
        <AddCatButton onPress={(): void => {}} />
      </View>
    </ScrollView>
  );
};

export default ListScreen;
