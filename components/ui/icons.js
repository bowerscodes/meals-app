// Global imports
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';


export default icons = (icon, color='black') => {

  if (icon === 'affordability') {
    return (
      <FontAwesome name='money' size={24} color={color} />
    );
  } ;
  if (icon === 'complexity') {
    return (
      <Entypo name='bar-graph' size={20} color={color} />
    );
  };
  if (icon === 'duration') {
    return (
      <MaterialIcons name='access-time' size={24} color={color} />
    );
  };
  if (icon === 'favourite-outline') {
    return (
      <MaterialIcons name="favorite-outline" size={24} color={color} />
    );
  };
  if (icon === 'favourite') {
    return (
      <MaterialIcons name="favorite" size={24} color={color} />
    );
  };
}
