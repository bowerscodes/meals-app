// Global imports
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Local imports
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/ui/MealItem";

const MealsOverview = ({ route, navigation }) => {

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  // useLayoutEffect is used to update the title of the screen, and circumvent the delay in rendering the title text
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return (
      <MealItem {...mealItemProps} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals} 
        keyExtractor={(item) => item.id} 
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
