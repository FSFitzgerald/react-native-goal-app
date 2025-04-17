import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = () => {
    setGoals([...goals, enteredGoal]);
    setEnteredGoal("");
    setModalVisible(false);
  };

  const deleteGoalHandler = (index) => {
    const newGoals = goals.filter((goal, i) => i !== index);
    setGoals(newGoals);
  };

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const cancelAddGoalHandler = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="light"  />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.inputContainer}>
            <Image
              source={require("./assets/images/goal.png")}
              style={styles.image}
            />
            <TextInput
              style={styles.input}
              placeholder="Goal"
              value={enteredGoal}
              onChangeText={(text) => setEnteredGoal(text)}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Add Goal"
                  onPress={addGoalHandler}
                  color="#b180f0"
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={cancelAddGoalHandler}
                  color="#f31282"
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={({ index, item }) => {
              return (
                <Pressable
                  style={styles.goalItemContainer}
                  android_ripple={{ color: "#210644" }}
                >
                  <View style={styles.goalItem}>
                    <Text style={styles.goalText}>{item}</Text>
                  </View>
                  <View style={styles.deleteButton}>
                    <Button
                      title="x"
                      onPress={() => deleteGoalHandler(index)}
                    ></Button>
                  </View>
                </Pressable>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    width: "80%",
    height: "auto",
    borderRadius: 6,
    padding: 16,
  },
  goalContainer: {
    flex: 5,
    width: "80%",
    marginTop: 20,
  },
  goalItemContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#5e0acc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  goalItem: {
    width: "85%",
    justifyContent: "center",
    flex: 1,
  },
  goalText: {
    color: "white",
  },
  deleteButton: {
    width: "15%",
  },
});
