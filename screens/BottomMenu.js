// BottomMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const BottomMenu = ({ onHomePress, onFriendsPress, onTransactionsPress, onCategoryPress, activeScreen }) => {
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.menuItem} onPress={onHomePress}>
        <Image source={require('../assets/home_icon.png')} style={[styles.icon, activeScreen === 'home' && styles.activeIcon]} />
        <Text style={[styles.menuText, activeScreen === 'home' && styles.activeMenuText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={onFriendsPress}>
        <Image source={require('../assets/friends_icon.png')} style={[styles.icon, activeScreen === 'friends' && styles.activeIcon]} />
        <Text style={[styles.menuText, activeScreen === 'friends' && styles.activeMenuText]}>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={onTransactionsPress}>
        <Image source={require('../assets/transactions_icon.png')} style={[styles.icon, activeScreen === 'transactions' && styles.activeIcon]} />
        <Text style={[styles.menuText, activeScreen === 'transactions' && styles.activeMenuText]}>Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={onCategoryPress}>
        <Image source={require('../assets/category_icon.png')} style={[styles.icon, activeScreen === 'category' && styles.activeIcon]} />
        <Text style={[styles.menuText, activeScreen === 'category' && styles.activeMenuText]}>Category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 13,
    color: '#333',
  },
  activeMenuText: {
    fontWeight: 'bold',
    color: '#3498db',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
    tintColor: '#333',
  },
  activeIcon: {
    tintColor: '#3498db',
  },
});

export default BottomMenu;
