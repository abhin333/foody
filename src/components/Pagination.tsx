import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Pagination() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.active]} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },

  active: {
    width: 20,
    backgroundColor: '#FF5B5B',
  },
});