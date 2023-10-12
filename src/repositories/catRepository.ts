import AsyncStorage from '@react-native-async-storage/async-storage';

import { CatRepository } from 'frontend-lib';

const catRepository = new CatRepository({
  storage: {
    getItem: async (key: string): Promise<string | null> =>
      AsyncStorage.getItem(key),

    setItem: async (key: string, value: string): Promise<void> =>
      AsyncStorage.setItem(key, value),
  },
});

export default catRepository;
