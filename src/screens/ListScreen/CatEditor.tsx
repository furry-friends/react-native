import React, { useContext, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './CatEditor.styles';
import IconButton from '../../components/IconButton/IconButton';
import { icons } from '../../assets';
import { Cat, CatContext, Gender } from 'frontend-lib';
import catRepository from '../../repositories/catRepository';

interface CatEditorProps {
  onClose: () => void;
  cat: Cat;
}

const CatEditor: React.FC<CatEditorProps> = ({
  onClose,
  cat: initialData,
}): JSX.Element => {
  const [cat, setCat] = useState(initialData);

  const { saveCat } = useContext(CatContext);

  const submit = async (): Promise<void> => {
    saveCat(await catRepository.addOrUpdate(cat));
    onClose();
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.title}>
                {cat.isNew ? 'Add' : 'Edit'} Kitty
              </Text>
              <IconButton iconSize={15} icon={icons.delete} onPress={onClose} />
            </View>
            <View>
              <TextInput
                value={cat.name}
                style={styles.input}
                placeholder="Name"
                onChange={(e): void =>
                  setCat(cat.copyWith({ name: e.nativeEvent.text }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Birthday"
                value={cat.birthday}
                onChange={(e): void =>
                  setCat(cat.copyWith({ birthday: e.nativeEvent.text }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Boy or Girl"
                value={cat.gender}
                onChange={(e): void =>
                  setCat(cat.copyWith({ gender: e.nativeEvent.text as Gender }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Bio"
                multiline
                numberOfLines={4}
                value={cat.bio}
                onChange={(e): void =>
                  setCat(cat.copyWith({ bio: e.nativeEvent.text }))
                }
              />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={onClose}>
                <View style={[styles.button, styles.cancelButton]}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={submit}>
                <View style={[styles.button, styles.submitButton]}>
                  <Text style={styles.submitText}>
                    {cat.isNew ? 'Add' : 'Update'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CatEditor;
