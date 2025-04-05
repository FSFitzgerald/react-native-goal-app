import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    setGoals([...goals, enteredGoal]);
    setEnteredGoal("");
  };

  const deleteGoalHandler = (index) => {
    const newGoals = goals.filter((goal, i) => i !== index);
    setGoals(newGoals);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Goal"
          value={enteredGoal}
          onChangeText={(text) => setEnteredGoal(text)}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.scrollGoalContainer}>
        <View style={styles.goalListContainer}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalContainer}>
              <View style={styles.goalItem}>
                <Text>{goal}</Text>
              </View>
              <View>
                <Button
                  title="x"
                  onPress={() => deleteGoalHandler(index)}
                ></Button>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
    // marginBottom: 40,
    // gap: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  input: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "80%",
    height: "auto",
    borderRadius: 5,
    padding: 5,
  },
  goalListContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  scrollGoalContainer: {
    flex: 5,
    width: "80%",
  },
  goalContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#7b37c3",
    padding: 10,
    borderRadius: 5,
  },
  goalItem: {
    width: "90%",
    justifyContent: "center",
    flex: 1,
  },
  deleteButton: {
    width: "10%",
  },
});
