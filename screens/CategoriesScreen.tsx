import React, { useState, useEffect } from 'react'; 
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Modal, Alert, ScrollView } from 'react-native';
import BottomMenu from './BottomMenu';

const CategoriesScreen = ({ friends, onHomePress, onFriendsPress, onTransactionsPress, onCategoryPress }) => {
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [categoryAmount, setCategoryAmount] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    if (categories.length === 0) {
      setCategories([
        { id: '1', name: 'Groceries', friends: [], description: 'Weekly groceries', amount: 50 },
        { id: '2', name: 'Entertainment', friends: [], description: 'Movies and concerts', amount: 75 },
        { id: '3', name: 'Utilities', friends: [], description: 'Monthly utilities', amount: 100 },
      ]);
    }
  }, []);

  const addOrUpdateCategory = () => {
    if (!newCategoryName) {
      Alert.alert('Error', 'Please enter a category name.');
      return;
    }

    const categoryData = {
      id: editingCategory ? editingCategory.id : (categories.length + 1).toString(),
      name: newCategoryName,
      friends: selectedFriends,
      description: categoryDescription,
      amount: parseFloat(categoryAmount) || 0,
    };

    if (editingCategory) {
      setCategories(categories.map(cat => cat.id === editingCategory.id ? categoryData : cat));
    } else {
      setCategories([...categories, categoryData]);
    }

    resetModal();
    setModalVisible(false);
  };

  const resetModal = () => {
    setNewCategoryName('');
    setCategoryDescription('');
    setSelectedFriends([]);
    setCategoryAmount('');
    setEditingCategory(null);
  };

  const toggleFriendSelection = (friend) => {
    setSelectedFriends((prev) =>
      prev.includes(friend) ? prev.filter((f) => f !== friend) : [...prev, friend]
    );
  };

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <View style={styles.categoryContent}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
        <Text style={styles.friendsList}>
          Friends: {item.friends.length > 0 ? item.friends.map(friend => friend.name).join(', ') : 'None'}
        </Text>
        <Text style={styles.amount}>Amount: ${item.amount.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          setEditingCategory(item);
          setNewCategoryName(item.name);
          setCategoryDescription(item.description);
          setSelectedFriends(item.friends);
          setCategoryAmount(item.amount.toString());
          setModalVisible(true);
        }}
      >
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      {/* Botón centrado para agregar nueva categoría */}
      <View style={styles.centeredButtonContainer}>
        <TouchableOpacity style={styles.addCategoryButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addCategoryButtonText}>Add New Category</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de categorías */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoriesList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editingCategory ? 'Edit Category' : 'New Category'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Category Name"
              value={newCategoryName}
              onChangeText={setNewCategoryName}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={categoryDescription}
              onChangeText={setCategoryDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={categoryAmount}
              onChangeText={setCategoryAmount}
              keyboardType="numeric"
            />
            
            <Text style={styles.modalSubtitle}>Friends:</Text>
            <ScrollView style={styles.friendSelectionContainer}>
              {friends.map((friend) => (
                <TouchableOpacity
                  key={friend.id}
                  style={[
                    styles.friendItem,
                    selectedFriends.includes(friend) && styles.selectedFriend,
                  ]}
                  onPress={() => toggleFriendSelection(friend)}
                >
                  <Text style={styles.friendName}>{friend.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={addOrUpdateCategory}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#ff6666' }]}
                onPress={() => {
                  resetModal();
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <BottomMenu
        onHomePress={onHomePress}
        onFriendsPress={onFriendsPress}
        onTransactionsPress={onTransactionsPress}
        onCategoryPress={onCategoryPress}
        activeScreen="category"
        style={styles.bottomMenu}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 104,
    paddingTop: 20,
    backgroundColor: '#f3f4f6',
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  centeredButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  addCategoryButton: {
    backgroundColor: '#007BA7',
    paddingVertical: 14,
    borderRadius: 12,
    maxWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  addCategoryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Asegura que el texto esté centrado
  },
  categoriesList: {
    paddingBottom: 100, // Espacio para evitar que la lista choque con el menú inferior
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 14,
    width: '100%',
    maxWidth: 600,
    elevation: 3,
    flexDirection: 'column',
  },
  categoryContent: {
    marginBottom: 10,
    width: '100%',
    maxWidth: 600,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  categoryDescription: {
    color: '#777',
    fontSize: 14,
    marginBottom: 4,
  },
  friendsList: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  amount: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    width: '100%',
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  friendSelectionContainer: {
    maxHeight: 150,
    marginBottom: 20,
  },
  friendItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
  },
  selectedFriend: {
    backgroundColor: '#007BA7',
  },
  friendName: {
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomMenu: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around', // Aumenta el espacio entre los elementos
    paddingHorizontal: 10, // Espacio adicional a los lados
    paddingVertical: 10,
  },
});

export default CategoriesScreen;
