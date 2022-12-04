import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { colors } from "../constants/colors";

export default function TaskCard({ item, onDelete }) {
  return item.isCompleted === false ? (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.taskContent}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedtext}>{item.taskContent}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  completedContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: colors.grey,
  },
  text: {
    color: "black",
  },
  completedtext: {
    color: colors.light,
  },
});
