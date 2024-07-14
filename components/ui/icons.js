// Global imports
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';


export default icons = {
  affordability: () => {
    return (
      <FontAwesome name='money' size={24} color='white' />
    );
  },
  complexity: () => {
    return (
      <Entypo name='bar-graph' size={20} color='white' />
    );
  },
  duration: () => {
    return (
      <MaterialIcons name='access-time' size={24} color='white' />
    );
  },
}
