import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import LoginScreen from './LoginScreen'; // Importamos la pantalla de Login
import RegisterScreen from './RegisterScreen'; // Importamos la pantalla de Register
import ExpensesScreen from './ExpensesScreen'; // Importamos la pantalla de Expenses
import ForgotPasswordScreen from './ForgotPassword'; // Importamos la pantalla de recuperación de contraseña

const Menu = () => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'login' | 'register' | 'expenses' | 'forgotPassword'>('home'); // Estado para controlar las pantallas

  return (
    <SafeAreaView style={styles.container}>
      {/* Renderiza la pantalla según el estado `currentScreen` */}
      {currentScreen === 'home' && (
        <View style={styles.homeContainer}>
          {/* Logo */}
          <Image source={require('../assets/logo.png')} style={styles.logo} />

          {/* Botón LOGIN */}
          <TouchableOpacity style={styles.loginButton} onPress={() => setCurrentScreen('login')}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Botón SIGN UP */}
          <TouchableOpacity style={styles.signupButton} onPress={() => setCurrentScreen('register')}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Pantalla de Login */}
      {currentScreen === 'login' && (
        <LoginScreen
          onRegisterPress={() => setCurrentScreen('register')}
          onForgotPasswordPress={() => setCurrentScreen('forgotPassword')} // Navegar a la pantalla de recuperación de contraseña
          onLoginPress={() => setCurrentScreen('expenses')} // Al hacer login, cambia a la pantalla de Expenses
        />
      )}

      {/* Pantalla de Registro */}
      {currentScreen === 'register' && (
        <RegisterScreen onLoginPress={() => setCurrentScreen('login')} />
      )}

      {/* Pantalla de Expenses */}
      {currentScreen === 'expenses' && <ExpensesScreen />}

      {/* Pantalla de recuperación de contraseña */}
      {currentScreen === 'forgotPassword' && (
        <ForgotPasswordScreen onBackPress={() => setCurrentScreen('login')} /> // Regresa a Login
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  homeContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 580,
    height: 400,
    marginBottom: -30,
  },
  loginButton: {
    backgroundColor: '#002D72',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#00C2C5',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
