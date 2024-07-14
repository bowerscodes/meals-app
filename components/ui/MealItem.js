// Global Imports
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

// Local Imports
import icons from './icons';


const MealItem = ({ title, imageUrl, affordability, complexity, duration }) => {
  return (
    <View style={[styles.mealContainer, styles.contentShadow]}>
      <Pressable>
        <ImageBackground
          source={{ uri: imageUrl }}
          resizeMode='cover'
          imageStyle={{ borderRadius: 6 }}
          style={styles.mealImage}
        >
            <View style={styles.mealContentContainer}>
              <Text style={[styles.mealTitle, styles.contentShadow]}>{title}</Text>
              <View style={[styles.mealContent, styles.contentShadow]}>
                {icons.affordability()}
                <Text style={styles.mealText}>{affordability}</Text>
                {icons.complexity()}
                <Text style={styles.mealText}>{complexity}</Text>
                {icons.duration()}
                <Text style={styles.mealText}>{duration} mins</Text>
              </View>
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
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: 0.4,
  },
});
