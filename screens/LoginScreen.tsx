import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ onRegisterPress, onForgotPasswordPress, onLoginPress }) => {
  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <Image source={require('../assets/letters.png')} style={styles.titleImage} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="   Password   "
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Botón de Login */}
        <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Login Options */}
      <Text style={styles.loginWith}>OR</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/google.png')}
          style={styles.googleLogo}
        />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Register Text */}
      <TouchableOpacity onPress={onRegisterPress}>
        <Text style={styles.register}>
          Don't have an account yet? <Text style={styles.registerLink}>Register for free</Text>
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
    marginTop: -80,
    marginBottom: -240,
  },
  inputContainer: {
    width: '90%', // Asegura que el contenedor tenga un ancho definido
    marginBottom: 24,
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    elevation: 8,
    alignItems: 'center', // Centrar elementos dentro del contenedor
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 65,
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#007BFF',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#002D72',
    paddingVertical: 15,
    borderRadius: 8,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginWith: {
    marginTop: 20,
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'flex-start',
    elevation: 3,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
  },
  register: {
    fontSize: 14,
    marginTop: 30,
  },
  registerLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
});

export default LoginScreen;
