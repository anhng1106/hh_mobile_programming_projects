import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("0");
  const [result, setResult] = useState(0);

  const handlePlusChange = () => {
    const sum = parseFloat(firstNum) + parseFloat(secondNum);
    setResult(sum); // Rounds to two decimal places
  };

  const handleMinusChange = () => {
    const difference = parseFloat(firstNum) - parseFloat(secondNum);
    setResult(difference);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Result: {result}</Text>
      <TextInput
        placeholder="first number"
        onChangeText={(text) => setFirstNum(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="second number"
        onChangeText={(text) => setSecondNum(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handlePlusChange} />
        <Button title="-" onPress={handleMinusChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "20%",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%", // Adjust width as needed
    textAlign: "center",
  },
});
