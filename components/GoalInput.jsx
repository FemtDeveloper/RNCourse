import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onAddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal..."
        placeholderTextColor="#deb7ef"
        value={enteredGoal}
        onChangeText={setEnteredGoal}
      />
      <Button title="Add todo" onPress={onAddGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#fff",
    width: "70%",
    color: "white",
    marginRight: 8,
    padding: 8,
    textDecorationColor: "green",
  },
});
