import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Image,
} from 'react-native';

const CalculatorScreen = ({ onHomePress }) => {
  const [totalAmount, setTotalAmount] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [category, setCategory] = useState('Select Category');
  const [result, setResult] = useState(null);
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const categories = ['Food', 'Transport', 'Entertainment', 'Groceries', 'Utilities'];

  const calculateSplit = () => {
    const total = parseFloat(totalAmount);
    const people = parseInt(numPeople);
    if (!isNaN(total) && !isNaN(people) && people > 0) {
      setResult((total / people).toFixed(2));
    } else {
      setResult('Please enter valid values');
    }
  };

  const selectCategory = (cat) => {
    setCategory(cat);
    setIsCategoryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Split by Category</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="$0.00"
          value={totalAmount}
          onChangeText={(value) => setTotalAmount(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of People</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          value={numPeople}
          onChangeText={(value) => setNumPeople(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setIsCategoryModalVisible(true)}
        >
          <Text style={styles.dropdownText}>{category}</Text>
        </TouchableOpacity>

        <Modal
          visible={isCategoryModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FlatList
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => selectCategory(item)}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setIsCategoryModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={calculateSplit}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Each person pays:{' '}
            {result === 'Please enter valid values' ? result : `$${result}`}
          </Text>
          {result !== 'Please enter valid values' && (
            <Text style={styles.categoryText}>Category: {category}</Text>
          )}
        </View>
      )}

      {/* Menú inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={onHomePress}>
          <Image source={require('../assets/home_icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/calculator_icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/transactions_icon.png')} style={[styles.icon, styles.largeIcon]} />
          <Text style={styles.menuText}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('../assets/category_icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modalContainer: {
    marginHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalItem: {
    paddingVertical: 15,
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalCloseButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  calculateButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 15,
    borderRadius: 10,
    maxWidth: 500,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  categoryText: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 13,
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  largeIcon: {
    width: 28,
    height: 30,
  },
});

export default CalculatorScreen;
