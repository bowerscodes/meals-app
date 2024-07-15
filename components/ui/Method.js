// Global imports
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import styleGuide from '../../styles';

const Method = ({ steps }) => {
  
  return (
    <View style={styleGuide.container}>
      <Text style={styleGuide.heading}>Method</Text>
      {steps.map((step, index) => {
        const stepNumber = index +1

        return (
          <View style={styles.stepContainer} key={stepNumber}>
            <Text style={styles.stepNumber}>{stepNumber}.</Text>
            <Text style={[styleGuide.body, {marginLeft: 8}]}>{step}</Text>
          </View>
        );
      })}
    </View>
  )
};

export default Method;

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
