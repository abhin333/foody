import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function FloatingCart() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Feather name="shopping-cart" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 25,

    width: 65,
    height: 65,
    borderRadius: 32.5,

    backgroundColor: '#FF5B5B',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 10,

    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});