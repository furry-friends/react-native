import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000060',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 6,
    width: '90%',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
  },

  header: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
  },

  input: {
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },

  button: {
    height: 40,
    width: 120,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelText: {
    color: '#666',
    fontSize: 16,
  },

  submitText: {
    color: '#fff',
    fontSize: 16,
  },

  cancelButton: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  submitButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
