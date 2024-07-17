// Global imports
import { Text, View } from 'react-native';

// Local imports
import styleGuide from '../../styles';

const Ingredients = ({ ingredients }) => {
  return (
    <View style={styleGuide.container}>
      <Text style={styleGuide.heading}>Ingredients</Text>
      {ingredients.map((ingredient, index) => {
        return (
          <Text key={index} style={styleGuide.body}>{ingredient}</Text>
        );
      })}
    </View>
  );
};

export default Ingredients;
