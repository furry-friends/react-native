import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CatCard from '../../components/CatCard/CatCard';

import styles from './ListScreen.styles';
import AddCatButton from '../../components/AddCatButton/AddCatButton';
import catRepository from '../../repositories/catRepository';
import { Cat, CatContext, SortBy, sortCatsBy } from 'frontend-lib';
import CatEditor from './CatEditor';

interface ListScreenProps {
  defaultSortBy: SortBy;
  keyword: string;
}

const ListScreen: React.FC<ListScreenProps> = ({
  defaultSortBy,
  keyword,
}): JSX.Element => {
  const { cats, setCats } = useContext(CatContext);
  const [catToEdit, setCatToEdit] = useState<Cat | null>(null);

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
        <Text style={styles.noResult}>
          No cats with keyword "<Text style={styles.redText}>{keyword}</Text>"
          found.
        </Text>
      </View>
    );
  }

  return (
    <>
      {catToEdit && (
        <CatEditor cat={catToEdit!} onClose={(): void => setCatToEdit(null)} />
      )}
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          {cats.map(
            (cat: Cat): JSX.Element => (
              <CatCard cat={cat} onEdit={setCatToEdit} key={cat.id} />
            ),
          )}
          {!keyword && (
            <AddCatButton onPress={(): void => setCatToEdit(Cat.empty)} />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ListScreen;
