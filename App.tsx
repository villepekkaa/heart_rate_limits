import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age))===true ? Number(age) : 0


  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
      keyboardType='number-pad'
      style={styles.field}
      value={age}
      onChangeText={setAge}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28
  },
  field: {
    marginVertical: 8
  }
});
