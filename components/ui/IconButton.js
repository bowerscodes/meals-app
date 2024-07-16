// Global imports
import { Pressable } from 'react-native';

// Local imports
import icons from './icons';


const IconButton = ({ icon, onPress }) => {

  return (
    <Pressable onPress={onPress}>
      {icons(icon)}
    </Pressable>
  );
};

export default IconButton;
