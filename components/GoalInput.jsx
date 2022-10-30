import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addGoalHandler, isModalVisible, endAddGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onAddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gota.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          placeholderTextColor="#deb7ef"
          value={enteredGoal}
          onChangeText={setEnteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add todo" onPress={onAddGoal} color="#018ef0" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={endAddGoalHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#00f",
    width: "100%",
    color: "grey",
    borderRadius: 6,
    padding: 8,
    textDecorationColor: "green",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
