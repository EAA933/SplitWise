import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen'; 

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen 
        name="Expenses" 
        component={ExpensesScreen} 
        options={{ title: 'Dividir Costos' }} 
      />
      
    </Stack.Navigator>
  );
};

export default MyStack;
