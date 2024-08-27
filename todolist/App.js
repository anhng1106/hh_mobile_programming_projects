import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import EmptyListComponent from "./EmptyListComponent";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handlePress = () => {
    setTodos([todo, ...todos]);
    setTodo("");
    console.log(todos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputcomponent}>
        <TextInput
          style={styles.standardtext}
          placeholder="Enter a new task"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button
          style={styles.standardtext}
          title="ADD TODO"
          onPress={handlePress}
        />
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.listitems}>
            <Text style={styles.standardtext}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={EmptyListComponent}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  standardtext: {
    fontSize: 20,
  },
  inputcomponent: {
    width: "100%",
  },
  listitems: {
    backgroundColor: "lightblue",
    width: "80%",
    borderRadius: 60,
    padding: 10,
    margin: 5,
  },
});
