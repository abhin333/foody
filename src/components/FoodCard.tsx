import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props {
  item: any;
}

export default function FoodCard({ item }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push("/details")}
      style={[styles.card, item.selected && styles.selectedCard]}
    >
      <Image source={item.image} style={styles.image} />

      <Text
        style={[styles.name, item.selected && styles.white]}
        numberOfLines={2}
      >
        {item.name}
      </Text>

      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesome
            key={star}
            name="star"
            size={11}
            color={star <= item.rating ? "#FFD700" : "#ddd"}
          />
        ))}
      </View>

      <Text style={[styles.price, item.selected && styles.white]}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 28,
    padding: 16,

    elevation: 6,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,

    minHeight: 220,
  },

  selectedCard: {
    backgroundColor: "#ff5b5b",
  },

  image: {
    width: 95,
    height: 95,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -20,
  },

  name: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  ratingContainer: {
    flexDirection: "row",
    marginTop: 8,
  },

  price: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },

  white: {
    color: "#fff",
  },
});
