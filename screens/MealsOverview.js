// Global imports
import { FlatList, StyleSheet, Text, View } from "react-native";

// Local imports
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route }) => {

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  })

  const renderMealItem = (itemData) => {
    return (
      <MealItem 
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
      />
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
