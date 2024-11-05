import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ExpensesScreen = () => {
  const [user, setUser] = useState('Eduardo');
  const [balance, setBalance] = useState(2500.75);
  const [expenses, setExpenses] = useState([
    { id: '1', description: 'Dinner with friends', amount: -50.0, date: '2024-10-24' },
    { id: '2', description: 'Salary', amount: 3000.0, date: '2024-10-20' },
    { id: '3', description: 'Groceries', amount: -120.5, date: '2024-10-19' },
    { id: '4', description: 'Netflix Subscription', amount: -15.0, date: '2024-10-18' },
  ]);

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const renderExpense = ({ item }) => (
    <View style={styles.expenseItem}>
      <View style={styles.expenseDetails}>
        <Text style={styles.expenseDescription}>{item.description}</Text>
        <Text style={styles.expenseDate}>{item.date}</Text>
      </View>
      <Text style={[styles.expenseAmount, item.amount < 0 ? styles.negative : styles.positive]}>
        {formatCurrency(item.amount)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {user}</Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>{formatCurrency(balance)}</Text>
        <Text style={styles.balanceSubtitle}>    Available balance for shared expenses     </Text>
      </View>

      <View style={styles.expensesContainer}>
        <Text style={styles.sectionTitle}>Recent expenses</Text>
        <FlatList
          data={expenses}
          renderItem={renderExpense}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/casa.png')} style={styles.icon} />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/usuario.png')} style={styles.icon} />
          <Text style={styles.menuText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/calculadora.png')} style={styles.icon} />
          <Text style={styles.menuText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/transaccion.png')} style={styles.icon} />
          <Text style={styles.menuText}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/categoria.png')} style={styles.icon} />
          <Text style={styles.menuText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/configuraciones.png')} style={styles.icon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  balanceCard: {
    backgroundColor: '#4caf50',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  balanceSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#444',
  },
  expensesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  expenseItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  expenseDetails: {
    flex: 1,
  },
  expenseDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  expenseDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  negative: {
    color: '#ff5252',
  },
  positive: {
    color: '#4caf50',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
});

export default ExpensesScreen;
