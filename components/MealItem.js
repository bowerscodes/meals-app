// Global Imports
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';


const MealItem = ({ title, affordability, complexity, duration, image }) => {
  return (
    <View style={styles.mealContainer}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode='cover'
        imageStyle={{ borderRadius: 6 }}
        style={styles.mealImage}
      >
        <View style={styles.mealContentContainer}>
          <Text style={[styles.mealTitle, styles.contentShadow]}>{title}</Text>
          <View style={[styles.mealContent, styles.contentShadow]}>
            <FontAwesome name='money' size={24} color='white' />
            <Text style={styles.mealText}>{affordability}</Text>
            <Entypo name='bar-graph' size={20} color='white' />
            <Text style={styles.mealText}>{complexity}</Text>
            <MaterialIcons name='access-time' size={24} color='white' />
            <Text style={styles.mealText}>{duration} mins</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
};

export default MealItem;

styles = StyleSheet.create({
  mealContainer: {
    width: '100%',
    height: 150,
    padding: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    // justifyContent: 'space-between',
  },
  mealImage: {
    height: '100%',
    // paddingTop: 40,
    paddingHorizontal: 5,
  },
  mealTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  mealText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5,
    marginRight: 10,
    // paddingBottom: 30
  },
  mealContentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'left',
  },
  mealContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 5,
  },
  contentShadow: {
    // Android Shadow
    elevation: 2,

    // iOS Shadow
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
  },
});
