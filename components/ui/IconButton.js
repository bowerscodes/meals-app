// Global imports
import { Pressable } from 'react-native';

// Local imports
import icons from './icons';


const IconButton = ({ onPress }) => {

  return (
    <Pressable onPress={onPress}>
      {icons('favourite')}
    </Pressable>
  );
};

export default IconButton;
