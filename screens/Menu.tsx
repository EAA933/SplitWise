import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ExpensesScreen from './ExpensesScreen';
import CalculatorScreen from './CalculatorScreen';
import FriendsScreen from './FriendsScreen';
import AddFriendScreen from './AddFriendScreen';
import TransactionsScreen from './TransactionsScreen';
import CategoriesScreen from './CategoriesScreen';
import ForgotPasswordScreen from './ForgotPassword';

const Menu = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const changeScreen = (screen) => setCurrentScreen(screen);

  const screenComponents = {
    home: (
      <View style={styles.homeContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.loginButton} onPress={() => changeScreen('login')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => changeScreen('register')}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    ),
    login: (
      <LoginScreen
        onRegisterPress={() => changeScreen('register')}
        onForgotPasswordPress={() => changeScreen('forgotPassword')}
        onLoginPress={() => changeScreen('expenses')}
      />
    ),
    register: <RegisterScreen onLoginPress={() => changeScreen('login')} />,
    expenses: (
      <ExpensesScreen
        onFriendsPress={() => changeScreen('friends')}
        onTransactionsPress={() => changeScreen('transactions')}
        onCategoryPress={() => changeScreen('category')}
      />
    ),
    calculator: (
      <CalculatorScreen
        onHomePress={() => changeScreen('expenses')}
        onBackPress={() => changeScreen('expenses')}
      />
    ),
    friends: (
      <FriendsScreen 
        onHomePress={() => changeScreen('expenses')}
        onTransactionsPress={() => changeScreen('transactions')}
        onCategoryPress={() => changeScreen('category')}
        onAddFriendPress={() => changeScreen('addFriend')}
      />
    ),
    transactions: (
      <TransactionsScreen 
        onHomePress={() => changeScreen('expenses')}
        onFriendsPress={() => changeScreen('friends')}
        onCategoryPress={() => changeScreen('category')}
      />
    ),
    category: (
      <CategoriesScreen 
        friends={[
          { id: '1', name: 'Carlos' },
          { id: '2', name: 'Ana' },
          { id: '3', name: 'Luis' }
        ]}
        onHomePress={() => changeScreen('expenses')}
        onFriendsPress={() => changeScreen('friends')}
        onTransactionsPress={() => changeScreen('transactions')}
      />
    ),
    addFriend: (
      <AddFriendScreen onBackPress={() => changeScreen('friends')} />
    ),
    forgotPassword: (
      <ForgotPasswordScreen onBackPress={() => changeScreen('login')} />
    ),
  };

  return (
    <SafeAreaView style={styles.container}>
      {screenComponents[currentScreen]}
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
