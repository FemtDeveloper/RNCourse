import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const startGoalHandler = () => {
    setIsModalVisible(true);
  };

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
  };

  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color={"violet"}
          onPress={startGoalHandler}
        />
        <GoalInput
          isModalVisible={isModalVisible}
          addGoalHandler={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            // key extractor is for extract the id which probably brings the object and convert it to a key
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
          />
          {/* flatList allow you to load only the data needed in the view */}
          {/* <ScrollView> */}

          {/* </ScrollView> */}
        </View>
      </View>
    </>
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

  goalsContainer: {
    flex: 5,
  },
});
