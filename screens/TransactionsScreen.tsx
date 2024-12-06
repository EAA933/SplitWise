import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import BottomMenu from './BottomMenu';
import { useNavigation } from '@react-navigation/native'; // Asegúrate de tener esto importado

const TransactionsScreen = ({ onHomePress, onFriendsPress, onTransactionsPress, onCategoryPress }) => {
  const navigation = useNavigation(); // Instancia de navegación

  const [transactions, setTransactions] = useState([
    { id: '1', category: 'Food', description: 'Dinner at restaurant', amount: -25.00, date: '2024-11-01' },
    { id: '2', category: 'Food', description: 'Groceries', amount: -50.00, date: '2024-11-02' },
    { id: '3', category: 'Salary', description: 'Monthly Salary', amount: 1500.00, date: '2024-11-03' },
    { id: '4', category: 'Entertainment', description: 'Movie', amount: -15.00, date: '2024-11-04' },
    { id: '5', category: 'Entertainment', description: 'Concert', amount: -100.00, date: '2024-11-05' },
    { id: '6', category: 'Travel', description: 'Flight tickets', amount: -300.00, date: '2024-11-06' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const categories = Array.from(new Set(transactions.map((t) => t.category)));

  const filteredTransactions = selectedCategory
    ? transactions.filter((transaction) => transaction.category === selectedCategory)
    : transactions;

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const monthlyBalance = transactions
    .filter((transaction) => new Date(transaction.date) >= new Date(new Date().setDate(new Date().getDate() - 30)))
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const categoryBalances = categories.reduce((acc, category) => {
    const categoryTotal = transactions
      .filter((transaction) => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    acc[category] = categoryTotal;
    return acc;
  }, {});

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.transactionDetails}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={[styles.amount, item.amount < 0 ? styles.negative : styles.positive]}>
          ${Math.abs(item.amount).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Monthly Balance: ${monthlyBalance.toFixed(2)}</Text>
        <Text style={styles.balanceText}>Total Balance: ${totalBalance.toFixed(2)}</Text>
      </View>

      <View style={styles.categoryBalancesContainer}>
        {Object.keys(categoryBalances).map((category) => (
          <Text key={category} style={styles.categoryBalanceText}>
            {category} Balance: ${categoryBalances[category].toFixed(2)}
          </Text>
        ))}
      </View>

      <Text style={styles.movementsTitle}>Movements</Text>

      <View style={styles.categorySelectorContainer}>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Text style={styles.dropdownButtonText}>Select a Category</Text>
        </TouchableOpacity>
        {selectedCategory && (
          <Text style={styles.selectedCategoryText}>{selectedCategory}</Text>
        )}
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => { setSelectedCategory(''); setDropdownVisible(false); }}>
            <Text style={styles.dropdownItemText}>All</Text>
          </TouchableOpacity>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.dropdownItem}
              onPress={() => { setSelectedCategory(category); setDropdownVisible(false); }}
            >
              <Text style={styles.dropdownItemText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      
      {/* Botón que lleva a la pantalla de 'OperationCalculation' */}
      <TouchableOpacity 
        style={styles.createOperationButton} 
        onPress={() => navigation.navigate('OperationCalculation')}
      >
        <Text style={styles.createOperationButtonText}>Create New Operation</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTransactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
      />

      <BottomMenu
        onHomePress={onHomePress}
        onFriendsPress={onFriendsPress}
        onTransactionsPress={onTransactionsPress}
        onCategoryPress={onCategoryPress}
        activeScreen="transactions"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  balanceContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00509E',
    marginVertical: 5,
    textAlign: 'center',
  },
  categoryBalancesContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryBalanceText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00509E',
    marginVertical: 2,
    textAlign: 'center',
  },
  movementsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00509E',
    textAlign: 'center',
    marginTop: 10,
  },
  categorySelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dropdownButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    width: '60%',
  },
  dropdownButtonText: {
    fontSize: 18,
    color: '#333',
  },
  selectedCategoryText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
    width: '90%',
    alignSelf: 'center',
  },
  dropdownItem: {
    padding: 12,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  description: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  negative: {
    color: '#D9534F',
  },
  positive: {
    color: '#5CB85C',
  },
  createOperationButton: {
    backgroundColor: '#00509E',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  createOperationButtonText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default TransactionsScreen;
