import { createStackNavigator } from '@react-navigation/stack';
import TransactionsScreen from './TransactionsScreen';
import OperationCalculation from './OperationCalculation'; // Asegúrate de importar esta pantalla

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="OperationCalculation" component={OperationCalculation} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
