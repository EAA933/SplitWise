import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BottomMenu from './BottomMenu';

const ExpensesScreen = ({ onFriendsPress, onTransactionsPress, onCategoryPress }) => {
  const [user, setUser] = useState('Eduardo');
  const [balance, setBalance] = useState(2500.75);
  const [expenses, setExpenses] = useState([
    { id: '1', description: 'Dinner with friends', amount: -50.0, date: '2024-10-24' },
    { id: '2', description: 'Salary', amount: 3000.0, date: '2024-10-20' },
    { id: '3', description: 'Groceries', amount: -120.5, date: '2024-10-19' },
    { id: '4', description: 'Netflix Subscription', amount: -15.0, date: '2024-10-18' },
  ]);

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

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
        <View style={styles.userInfo}>
          <Image source={require('../assets/usuario.png')} style={styles.userIcon} />
          <Text style={styles.greetingText}>Hello, {user}</Text>
        </View>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>{formatCurrency(balance)}</Text>
        <Text style={styles.balanceSubtitle}>Available balance for shared expenses</Text>
      </View>

      {/* Nuevo botón debajo de Overview */}
      <View style={styles.customCard}>
        <Text style={styles.customCardTitle}>Create Calculation</Text>
        <Text style={styles.customCardDescription}>
          Manage your shared expenses easily and keep track of your balance.
        </Text>
        <TouchableOpacity style={styles.customCardButton} onPress={() => alert('Create a new operation')}>
          <Text style={styles.customCardButtonText}>Create a new operation</Text>
        </TouchableOpacity>
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

      <BottomMenu
        onHomePress={() => {}}
        onFriendsPress={onFriendsPress}
        onTransactionsPress={onTransactionsPress}
        onCategoryPress={onCategoryPress}
        activeScreen="home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B0B0B0',
    marginRight: 10,
    tintColor: '#fff',
  },
  greetingText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
  },
  balanceCard: {
    backgroundColor: '#2ECC71',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
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
  customCard: {
    backgroundColor: '#E8F8F5',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  customCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
  customCardDescription: {
    fontSize: 14,
    color: '#34495E',
    textAlign: 'center',
    marginBottom: 10,
  },
  customCardButton: {
    backgroundColor: '#1ABC9C',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  customCardButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
    backgroundColor: '#f0f0f0',
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
    color: '#D9534F',
  },
  positive: {
    color: '#5CB85C',
  },
});

export default ExpensesScreen;
