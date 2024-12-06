import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import BottomMenu from './BottomMenu';

const FriendsScreen = ({ onHomePress, onTransactionsPress, onCategoryPress, onAddFriendPress }) => {
  const [friends, setFriends] = useState([
    { id: '1', name: 'Carlos', balance: -25.0, color: '#3498db' },
    { id: '2', name: 'Ana', balance: 40.0, color: '#e74c3c' },
    { id: '3', name: 'Luis', balance: 15.5, color: '#f1c40f' },
  ]);

  const totalBalance = friends.reduce((acc, friend) => acc + friend.balance, 0);

  const renderFriend = ({ item }) => (
    <View style={styles.friendItem}>
      <Image source={require('../assets/usuario.png')} style={[styles.friendImage, { tintColor: item.color }]} />
      <View style={styles.friendDetails}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={[styles.friendBalance, item.balance < 0 ? styles.negative : styles.positive]}>
          {item.balance < 0 ? `You owe $${Math.abs(item.balance)}` : `Owes you $${item.balance}`}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.totalBalance}>
        Total Balance: {totalBalance < 0 ? `You owe $${Math.abs(totalBalance)}` : `Owes you $${totalBalance}`}
      </Text>

      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
        style={styles.friendList}
        ListFooterComponent={
          <TouchableOpacity style={styles.addButton} onPress={onAddFriendPress}>
            <Text style={styles.addButtonText}>Add Friend</Text>
          </TouchableOpacity>
        }
      />

      <BottomMenu
        onHomePress={onHomePress}
        onFriendsPress={() => {}}
        onTransactionsPress={onTransactionsPress}
        onCategoryPress={onCategoryPress}
        activeScreen="friends"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  totalBalance: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  friendList: {
    flex: 1,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  friendImage: {
    width: 25,
    height: 30,
    borderRadius: 2,
    marginRight: 10,
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  friendBalance: {
    fontSize: 14,
    marginTop: 4,
  },
  negative: {
    color: '#D9534F',
  },
  positive: {
    color: '#5CB85C',
  },
  addButton: {
    backgroundColor: '#00C2C5',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FriendsScreen;
