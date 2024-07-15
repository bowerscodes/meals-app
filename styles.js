import { StyleSheet } from 'react-native';

const shadow = {

}

export default styleGuide = StyleSheet.create({
  appWrapper: {
    flex: 1,
    padding: 10,
    shadow
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    lineHeight: 18,
  },
  container: {
    marginBottom: 16
  },
  shadow: {
    // Android Shadow
    elevation: 3,
    
    // iOS Shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
  }
});
