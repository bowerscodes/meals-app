// Global imports
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// Local imports
import { MEALS } from '../data/dummy-data';
import MealItemStats from '../components/ui/MealItemStats';
import Ingredients from '../components/ui/Ingredients';
import Method from '../components/ui/Method';
import styleGuide from '../styles';


const MealDetails = ({ route }) => {

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const { 
    title, 
    imageUrl, 
    affordability, 
    complexity, 
    duration, 
    ingredients, 
    steps, 
    isGlutenFree, 
    isVegan, 
    isVegetarian, 
    isLactoseFree 
  } = selectedMeal;
 
  return (
    <View style={styleGuide.appWrapper}>
        <ScrollView>
            <Image
              source={{ uri: imageUrl }} 
              style={styles.mealImage} 
            />
      <View style={styles.mealDetailsContainer}>
          <View style={styleGuide.container}>
            <Text style={styleGuide.title}>{title}</Text>
            <MealItemStats 
              affordability={affordability} 
              complexity={complexity} 
              duration={duration}
              dietary={[isGlutenFree, isVegan, isVegetarian, isLactoseFree]}
              color='black' 
            />
          </View>
          <Ingredients ingredients={ingredients} />
          <Method steps={steps} />     
      </View>
        </ScrollView>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  mealDetailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    paddingTop: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mealImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
