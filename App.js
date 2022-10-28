import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);

    console.log({ enteredGoal });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          placeholderTextColor="#deb7ef"
          onChangeText={goalInputHandler}
        />
        <Button title="Add todo" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          // key extractor is for extract the id which probably brings the object and convert it to a key
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
        {/* flatList allow you to load only the data needed in the view */}
        {/* <ScrollView> */}

        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#0c2c53",
    // alignItems: "center",
    // justifyContent: "center",
  },
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
  goalsContainer: {
    flex: 5,
  },

  goalItem: {
    margin: 8,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "violet",
    padding: 12,
    // fontWeight: 500,
  },
  goalText: {
    color: "white",
  },
});
