// Global imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Local imports
import Favourites from './screens/Favourites';
import CategorySelect from './screens/CategorySelect';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';
import FavouritesContextProvider from './store/context/favourites-context';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='AllCategories'
        component={CategorySelect}
        options={{title: 'Categories'}}
      />
      <Drawer.Screen 
        name='Favourites'
        component={Favourites}
      />
    </Drawer.Navigator>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <FavouritesContextProvider>
        <NavigationContainer
          // theme={{colors: {background: 'lightgray'}}}
        >
          <Stack.Navigator 
            // initialRouteName='CategorySelect'
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator} 
              options={{
                headerShown: false
              }}
            />
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
      </FavouritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
