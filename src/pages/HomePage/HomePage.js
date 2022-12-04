import { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import TaskCard from "../../components/TaskCard";
export default function HomePage({ route, navigation }) {
  const { userName } = route.params;
  const [taskData, setTaskData] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState();
  function renderTasks({ item }) {
    return <TaskCard item={item} onDelete={() => deleteTask(item)}></TaskCard>;
  }
  function deleteTask(task) {
    const filteredList = taskData.filter((item) => {
      if (item.id === task.id) {
        item.isCompleted = true;
      }
      return item;
    });
    setTaskData(filteredList);
  }
  function addTask() {
    const newTask = {
      id: taskData.length + 1,
      taskContent: taskInputValue,
      isCompleted: false,
    };
    setTaskData((anotherTask) => [...anotherTask, newTask]);
    setTaskInputValue("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="list" size={40} color={colors.light}></Ionicons>
        <Text style={styles.title}>
          <Text style={styles.userNameText}>{userName}</Text>'s List
        </Text>
        <Ionicons name="log-out" size={40} color={colors.secondary}></Ionicons>
      </View>
      <View style={styles.searchBarContainer}>
        <MyInput placeholder="Search tasks..."></MyInput>
      </View>
      <FlatList renderItem={renderTasks} data={taskData}></FlatList>
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarTitle}>Add a task to your list</Text>
        <MyInput
          value={taskInputValue}
          placeholder="Task..."
          onChangeText={(inputvalue) => setTaskInputValue(inputvalue)}
        ></MyInput>
        <View style={styles.bottomBarButtonInnerContainer}>
          <MyButton
            buttonPlaceHolder="Add the task"
            onPress={addTask}
          ></MyButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.light,
    marginLeft: 10,
    fontSize: 30,
    flex: 1,
  },
  userNameText: {
    color: colors.secondary,
  },
  bottomBar: {
    padding: 10,
    backgroundColor: colors.grey,
    borderRadius: 50,
  },
  bottomBarTitle: {
    color: colors.light,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  bottomBarButtonInnerContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  searchBarContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});
