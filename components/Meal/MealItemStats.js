// Global Imports
import { StyleSheet, Text, View } from 'react-native';

// Local Imports
import icons from '../ui/icons';
import styleGuide from '../../styles';

const MealItemStats = ({ affordability, complexity, duration, dietary, color }) => {

  let dietaryInfo = [];

  if (dietary) {
    const [ isGlutenFree, isVegan, isVegetarian, isLactoseFree ] = dietary;
    isGlutenFree && dietaryInfo.push('Gluten Free');
    isVegan && dietaryInfo.push('Vegan');
    isVegetarian && dietaryInfo.push('Vegetarian');
    isLactoseFree && dietaryInfo.push('Lactose Free');
  }

  const getDietaryInfo = (dietaryInfo) => {
    return (
      <View style={styles.dietary}>
        <Text style={styleGuide.body}>{dietaryInfo.join('  •  ')}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.mealStats}>
        {icons('affordability', color)}
        <Text style={[styles.mealStat, {color: color}]}>{affordability}</Text>
        {icons('complexity', color)}
        <Text style={[styles.mealStat, {color: color}]}>{complexity}</Text>
        {icons('duration', color)}
        <Text style={[styles.mealStat, {color: color}]}>{duration} mins</Text>
      </View>
      {dietaryInfo.length > 0 && getDietaryInfo(dietaryInfo)}
    </>
  );
};

export default MealItemStats;

const styles = StyleSheet.create({
  mealStats: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  mealStat: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5,
    marginRight: 10,
  },
});
