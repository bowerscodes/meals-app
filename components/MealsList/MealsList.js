// Global imports
import { FlatList, StyleSheet, View } from 'react-native';

// Local imports
import MealItem from './MealItem';

const MealsList = ({ items }) => {

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
    <View style={styleGuide.screenWrapper}>
      <FlatList 
        data={items} 
        keyExtractor={(item) => item.id} 
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;
