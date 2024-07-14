// Global Imports
import { Pressable, StyleSheet, Platform, Text, View } from 'react-native';

const Category = ({ title, color, onPress }) => {
    
  return(
    <View style={styles.categoryContainer}>
      <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({ pressed }) => [
          styles.categoryPressable, 
          pressed ? styles.categoryPressed : null
        ]}
        onPress={onPress}
      >
        <View style={[styles.category, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Category;



const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: 16,
    width: '40%',
    height: 150,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    // Android Shadow
    elevation: 4,

    // iOS Shadow
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
  },
  categoryPressable: {
    flex: 1,
  },
  categoryPressed: {
    opacity: 0.5,
  },
  category: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
