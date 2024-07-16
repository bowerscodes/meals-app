// Global imports
import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// Local imports
import { MEALS } from '../data/dummy-data';
import MealItemStats from '../components/ui/MealItemStats';
import Ingredients from '../components/ui/Ingredients';
import Method from '../components/ui/Method';
import styleGuide from '../styles';
import IconButton from '../components/ui/IconButton';


const MealDetails = ({ route, navigation }) => {

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
 
  const mealItemStats = {
    affordability: affordability,
    complexity: complexity,
    duration: duration,
    dietary: [isGlutenFree, isVegan, isVegetarian, isLactoseFree],
  };

  const setFavouriteHandler = () => {
    console.log('Favourited');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={setFavouriteHandler} />
      },
    });
  }, [navigation, setFavouriteHandler]);
  

  return (
    <ScrollView>
      <View style={styleGuide.appWrapper}>
        <Image
          source={{ uri: imageUrl }} 
          style={[styles.mealImage, styleGuide.shadow]} 
        />
        <View style={[styles.mealDetailsContainer, styleGuide.shadow]}>
          <View style={styleGuide.container}>
            <Text style={styleGuide.title}>{title}</Text>
            <MealItemStats 
              {...mealItemStats}
            />
          </View>
          <Ingredients ingredients={ingredients} />
          <Method steps={steps} />     
        </View>
      </View>
    </ScrollView>
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
