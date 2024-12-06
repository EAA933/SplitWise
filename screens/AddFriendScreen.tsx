import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AddFriendScreen = ({ onAddFriend, onBackPress }) => {
  const [inputType, setInputType] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleAddFriend = () => {
    if (!inputValue) {
      Alert.alert('Validation Error', 'Please enter a number or an email.');
      return;
    }

    onAddFriend(inputType === 'phone' ? { phoneNumber: inputValue } : { email: inputValue });
    Alert.alert('Success', `${inputType === 'phone' ? inputValue : inputValue} has been added to contacts!`);
    setInputValue('');
    setInputType(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Friend</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.optionButton, inputType === 'phone' && styles.activeOptionButton]}
          onPress={() => setInputType('phone')}
        >
          <Text style={[styles.optionButtonText, inputType === 'phone' && styles.activeOptionButtonText]}>Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, inputType === 'email' && styles.activeOptionButton]}
          onPress={() => setInputType('email')}
        >
          <Text style={[styles.optionButtonText, inputType === 'email' && styles.activeOptionButtonText]}>Email</Text>
        </TouchableOpacity>
      </View>

      {inputType && (
        <TextInput
          style={styles.input}
          placeholder={inputType === 'phone' ? '      Enter number      ' : '          Enter email          '}
          keyboardType={inputType === 'phone' ? 'phone-pad' : 'email-address'}
          value={inputValue}
          onChangeText={setInputValue}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleAddFriend}>
        <Text style={styles.addButtonText}>       Add Friend       </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.backButtonText}>Back to Friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#002D72',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center', // Centra el contenido verticalmente
  },
  activeOptionButton: {
    backgroundColor: '#002D72',
  },
  optionButtonText: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center', // Centra el texto horizontalmente
  },
  activeOptionButtonText: {
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  addButton: {
    backgroundColor: '#00509E',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  backButton: {
    alignItems: 'center',
    marginTop: 15,
  },
  backButtonText: {
    color: '#00509E',
    fontSize: 16,
    paddingTop: 40,
  },
});

export default AddFriendScreen;
