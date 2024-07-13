// Global imports
import { FlatList, StyleSheet, View } from 'react-native';

// Local imports
import { CATEGORIES } from '../data/dummy-data';
import Category from '../components/ui/Category';


const CategorySelect = ({ navigation }) => {

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      })
    };
    return <Category title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  };

  return (
    <View style={styles.categoriesContainer}>
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2}
      />
    </View>
  );
};

export default CategorySelect;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '5%',
  },
});
