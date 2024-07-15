// Global imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import icons from './components/ui/icons';

// Local imports
import CategorySelect from './screens/CategorySelect';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <NavigationContainer
        theme={{colors: {background: 'lightgray'}}}
      >
        <Stack.Navigator initialRouteName='CategorySelect'>
          <Stack.Screen 
            name='CategorySelect' 
            component={CategorySelect} 
            options={{title: 'Categories'}} 
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverview} 
          />
          <Stack.Screen 
            name='MealDetails' 
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
