// Global imports
import { useContext } from 'react';
import { Text, View } from 'react-native';

// Local imports
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';
import styleGuide from '../styles';

const Favourites = () => {

  const context = useContext(FavouritesContext);
  const favourites = MEALS.filter((meal) => context.ids.includes(meal.id));

  if (favourites.length === 0) {
    return (
      <View style={styleGuide.rootContainer}>
        <Text style={styleGuide.heading}>You have no favourite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList items={favourites}/>
  );
}

export default Favourites;
