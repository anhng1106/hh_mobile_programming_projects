import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default function App() {
  const [msg, setMsg] = useState("");

  const buttonPressed = () => {
    Alert.alert("You type: " + msg);
    console.log(msg);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        placeholder="Type some text here"
        onChangeText={(text) => setMsg(text)}
        keyboardType="numeric"
      />
      <Button color="green" title="Press me!" onPress={buttonPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#efbec3",
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
