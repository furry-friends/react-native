import React from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './CatEditor.styles';
import IconButton from '../../components/IconButton/IconButton';
import { icons } from '../../assets';

interface CatEditorProps {
  onClose: () => void;
}

const CatEditor: React.FC<CatEditorProps> = ({ onClose }): JSX.Element => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.title}>Add Kitty</Text>
              <IconButton iconSize={15} icon={icons.delete} onPress={onClose} />
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="Birthday" />
              <TextInput style={styles.input} placeholder="Boy or Girl" />
              <TextInput
                style={styles.input}
                placeholder="Bio"
                multiline
                numberOfLines={4}
              />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={onClose}>
                <View style={[styles.button, styles.cancelButton]}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.button, styles.submitButton]}>
                  <Text style={styles.submitText}>Save</Text>
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
