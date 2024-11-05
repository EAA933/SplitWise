import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({ onLoginPress }) => {
  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <Image source={require('../assets/letters.png')} style={styles.titleImage} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Already have an account? Login */}
      <TouchableOpacity onPress={onLoginPress}>
        <Text style={styles.loginLink}>
          Already have an account? <Text style={styles.loginLinkHighlight}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titleImage: {
    width: 550,
    height: 550,
    resizeMode: 'contain',
    marginTop: -100,
    marginBottom: -200,
  },
  inputContainer: {
    width: '90%', // Ajuste del ancho del contenedor de entrada
    marginBottom: 30,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 90, // Espacio para el texto
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlign: "center", // Alinear el texto a la izquierda
  },
  registerButton: {
    width: '95%', // Aumenta el ancho del botón para ser más consistente
    backgroundColor: '#00C2C5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    fontSize: 14,
    marginTop: 30,
  },
  loginLinkHighlight: {
    color: '#007BFF',
    fontWeight: '600',
  },
});

export default RegisterScreen;
