import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CatCard from '../../components/CatCard/CatCard';

import styles from './ListScreen.styles';
import AddCatButton from '../../components/AddCatButton/AddCatButton';
import { CatContext } from '../../states/cats';
import catRepository from '../../repositories/catRepository';
import { Cat, SortBy, sortCatsBy } from 'frontend-lib';
import CatEditor from './CatEditor';

interface ListScreenProps {
  defaultSortBy: SortBy;
  onEdit: (cat: Cat) => void;
  keyword: string;
}

const ListScreen: React.FC<ListScreenProps> = ({
  defaultSortBy,
  keyword,
}): JSX.Element => {
  const { cats, setCats } = useContext(CatContext);
  const [showEditor, setShowEditor] = useState(false);

  useEffect((): (() => void) => {
    (async (): Promise<void> => {
      const data = await catRepository.query({ keyword });
      setCats(sortCatsBy(data, defaultSortBy));
    })();

    return (): void => {
      // TODO: cancel request
    };
  }, [setCats, defaultSortBy, keyword]);

  if (keyword && cats.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No cats found</Text>
      </View>
    );
  }

  return (
    <>
      {showEditor && <CatEditor onClose={(): void => setShowEditor(false)} />}
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          {cats.map(
            (cat: Cat): JSX.Element => (
              <CatCard key={cat.id} />
            ),
          )}
          {keyword || (
            <AddCatButton
              onPress={(): void => {
                setShowEditor(true);
              }}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ListScreen;
