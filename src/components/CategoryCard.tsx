import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';

interface Props {
  item: any;
  selected: boolean;
  onPress: () => void;
}

export default function CategoryCard({
  item,
  selected,
  onPress,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: selected ? 1.08 : 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [selected]);

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.card,
          selected && styles.selected,
        ]}>
        <Image
          source={item.image}
          style={styles.image}
        />

        <Text
          style={[
            styles.text,
            selected && styles.selectedText,
          ]}>
          {item.name.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 22,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 15,
    marginVertical: 10,

    // Android Shadow
    elevation: 6,

    // iOS Shadow
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  selected: {
    backgroundColor: '#FF5A5F',
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  text: {
    fontWeight: '700',
    fontSize: 12,
    color: '#333',
  },

  selectedText: {
    color: '#fff',
  },
});