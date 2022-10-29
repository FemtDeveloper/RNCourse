import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "violet",
    // fontWeight: 500,
  },
  goalText: {
    color: "white",
    padding: 12,
  },
  pressedItem: {
    opacity: 0.3,
    backgroundColor: "#F45f00",
  },
});
