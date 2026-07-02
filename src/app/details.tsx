import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';

export default function Details() {
  return (
    <View style={[styles.container, { marginTop: 30 }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={28} color="#555" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Card */}
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/burger.png')}
            style={styles.burger}
          />

          <Text style={styles.title}>Zinger Burger</Text>

          {/* Rating */}
          <View style={styles.rating}>
            <FontAwesome name="star" size={30} color="#FFD700" />
            <FontAwesome name="star" size={30} color="#FFD700" />
            <FontAwesome name="star" size={30} color="#FFD700" />
            <FontAwesome name="star" size={30} color="#FFD700" />
            <FontAwesome name="star" size={30} color="#111" />
          </View>

          {/* Description */}
          <Text style={styles.description}>
            This is the some tasty and vegetable burger.{"\n"}
            This is the some tasty and vegetable burger.{"\n"}
            This is the some tasty and vegetable burger.{"\n"}
            This is the some tasty and vegetable burger.{"\n"}
            This is the some tasty and vegetable burger.
          </Text>

          {/* Price */}
          <Text style={styles.price}>$12</Text>
        </View>
      </ScrollView>

      {/* Floating Cart */}
      <TouchableOpacity style={styles.cartButton}>
        <Feather
          name="shopping-cart"
          color="#fff"
          size={26}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4FB',
    paddingHorizontal: 18,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  card: {
    backgroundColor: '#EC5252',
    borderRadius: 28,
    padding: 22,
    minHeight: 700,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 8,
  },

  burger: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: -20,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: -10,
  },

  rating: {
    flexDirection: 'row',
    marginTop: 20,
  },

  description: {
    marginTop: 35,
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
  },

  price: {
    marginTop: 60,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },

  cartButton: {
    position: 'absolute',
    right: 25,
    bottom: 35,

    width: 65,
    height: 65,
    borderRadius: 32.5,

    backgroundColor: '#EC5252',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 10,

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});