import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
  
  import CategoryCard from "../components/CategoryCard";
  import Header from "../components/Header";
  import SearchBar from "../components/SearchBar";
  
import FloatingCart from "@/components/FloatingCart";
import FoodCard from "@/components/FoodCard";
import Pagination from "@/components/Pagination";
import { getFoodsByCategory } from "@/constants/foods";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../constants/categories";

export default function Home() {
  const [selected, setSelected] = useState(1);

  const selectedCategory = categories.find(
    (category) => category.id === selected
  );
  const filteredFoods = getFoodsByCategory(selected);
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
  
        <FlatList
          data={filteredFoods}
          extraData={selected}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FoodCard item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 120,
          }}
          ListHeaderComponent={
            <>
              <Header />
  
              <Text style={styles.title}>Choose the Food You Love</Text>
  
              <SearchBar />
  
              <Text style={styles.categoryTitle}>Category</Text>
  
              <FlatList
                horizontal
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <CategoryCard
                    item={item}
                    selected={selected === item.id}
                    onPress={() => setSelected(item.id)}
                  />
                )}
                showsHorizontalScrollIndicator={false}
              />
  
              <Text style={styles.categoryChip}>
                {selectedCategory?.chipLabel}
              </Text>
            </>
          }
          ListFooterComponent={
            <>
              <Pagination />
            </>
          }
        />
  
        <FloatingCart />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    content: {
      flex: 1,
      paddingHorizontal: 20,
    },
  
    title: {
      fontSize: 26,
      fontWeight: "700",
      marginTop: 25,
      color: "#333",
    },
  
    categoryTitle: {
      marginVertical: 20,
      fontSize: 18,
      fontWeight: "700",
      color: "#333",
    },
    categoryChip: {
      alignSelf: "flex-start",
      backgroundColor: "#fff",
      borderRadius: 20,
      paddingHorizontal: 18,
      paddingVertical: 7,
      fontWeight: "700",
      fontSize: 12,
      color: "#444",
      marginVertical: 20,
      elevation: 2,
    },
    categoryList: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
  });
  