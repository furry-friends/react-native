import {Cat} from 'frontend-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CATS_KEY = 'cats';

// TODO(Zhiguang):
// Move it into frontend-lib with a generic storage interface.
class CatRepository {
  /**
   * Returns all cats in the local storage.
   */
  private async listAll(): Promise<Cat[]> {
    const cats = await AsyncStorage.getItem(CATS_KEY);
    if (!cats) {
      return [];
    }

    try {
      return JSON.parse(cats).map(
        (cat: string): Cat => Cat.fromJson(JSON.parse(cat)),
      );
    } catch (e) {
      return [];
    }
  }

  /**
   * Saves the cats to the local storage.
   */
  private async saveCat(cats: Cat[]): Promise<void> {
    const catsJsonString = JSON.stringify(
      cats.map((e): string => e.toString()),
    );

    await AsyncStorage.setItem(CATS_KEY, catsJsonString);
  }

  /**
   * Returns all the cats or the cats name contains the given keyword.
   */
  async query({keyword}: {keyword?: string} = {}): Promise<Cat[]> {
    const cats = await this.listAll();

    if (!keyword) {
      return cats;
    }

    return cats.filter((e: Cat): boolean => e.name.includes(keyword));
  }

  /**
   * Deletes the cat with the given id.
   */
  async delete(id: number): Promise<void> {
    const cats = await this.listAll();
    const index = cats.findIndex((e: Cat): boolean => e.id === id);
    cats.splice(index, 1);
    this.saveCat(cats);
  }

  /**
   * Adds or updates the given cat.
   */
  async addOrUpdate(cat: Cat): Promise<Cat> {
    const cats = await this.listAll();

    if (cat.isNew) {
      cat = cat.copyWith({id: cats.length + 1});
      cats.push(cat);
    } else {
      const index = cats.findIndex((e): boolean => e.id === cat.id);
      cats[index] = cat;
    }

    this.saveCat(cats);
    return cat;
  }
}

const catRepository = new CatRepository();

export default catRepository;
