import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = Number(age)
  const isValidNumber: boolean = age !== "" && !isNaN(ageAsNumber)

  const lowerLimit: number = isValidNumber ? (220-ageAsNumber) * 0.65 : 0
  const upperLimit: number = isValidNumber ? (220-ageAsNumber) * 0.85 : 0

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        keyboardType='number-pad'
        style={styles.inputField}
        value={age}
        onChangeText={setAge}
      />
      {age !== "" && (
        <>
          <Text style={styles.field}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
          <Text style={styles.field}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingLeft: 10
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  field: {
    
  },
  inputField: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    paddingRight: 40,
    paddingLeft: 8,
    paddingVertical: 8,
    textAlign: 'left',
  }
});
