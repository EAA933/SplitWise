import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ExpensesScreen from './screens/ExpensesScreen'; 
import MyStack from './routes';
import LoginScreen from './screens/LoginScreen';
import Menu from './screens/Menu';

const App = () => {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
};

export default App;
