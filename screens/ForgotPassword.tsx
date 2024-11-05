import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPassword = ({ onBackPress }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    // Aquí puedes manejar la lógica para enviar un correo o mensaje de texto
    alert('Password reset instructions sent to: ' + input);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Forgot Password</Text>

      {/* Input Field */}
      <Text style={styles.description}>
        Please enter your email address or phone number to receive instructions to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        value={input}
        onChangeText={setInput}
        placeholderTextColor="#aaa"
        keyboardType="default"
        autoCapitalize="none"
      />

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity onPress={onBackPress}>
        <Text style={styles.backButton}>Go back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#555',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  sendButton: {
    width: '90%',
    backgroundColor: '#00C2C5',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 30,
    fontWeight: 'bold',
  },
  backButton: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 10,
  },
});

export default ForgotPassword;
