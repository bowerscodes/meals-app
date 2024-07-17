import { StyleSheet } from 'react-native';


export default styleGuide = StyleSheet.create({
  appWrapper: {
    flex: 1,
    padding: 10,
  },
  screenWrapper: {
    flex: 1,
    padding: 16,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 1,
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
