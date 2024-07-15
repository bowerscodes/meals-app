// Global Imports
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Local Imports
import MealItemStats from './MealItemStats';


const MealItem = ({ id, title, imageUrl, affordability, complexity, duration }) => {

  const navigation = useNavigation();

  const handleMealItemPress = () => {
    navigation.navigate('MealDetails', { 
      mealId: id,
     });
  };

  const mealStats = {
    affordability: affordability,
    complexity: complexity,
    duration: duration,
    color: 'white',
  };

  return (
    <View style={[styles.mealContainer, styles.contentShadow]}>
      <Pressable
        onPress={handleMealItemPress}
      >
        <ImageBackground
          source={{ uri: imageUrl }}
          resizeMode='cover'
          imageStyle={{ borderRadius: 6 }}
          style={styles.mealImage}
        >
          <View style={styles.mealContentContainer}>
            <Text style={[styles.mealTitle, styles.contentShadow]}>{title}</Text>
            <MealItemStats {...mealStats} color='white' />
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  )
};

export default MealItem;

styles = StyleSheet.create({
  mealContainer: {
    width: '100%',
    height: 175,
    marginBottom: 15,

  },
  mealImage: {
    height: '100%',
    width: '100%',
  },
  mealTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  mealText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5,
    marginRight: 10,
  },
  mealContentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'left',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  mealContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  contentShadow: {

    // Android Shadow
    elevation: 1,

    // iOS Shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
  },
});
