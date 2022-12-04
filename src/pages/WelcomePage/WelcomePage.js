import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image } from "react-native";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import { colors } from "../../constants/colors";
export default function WelcomePage({ navigation }) {
  const [inputValue, setInputValue] = useState();
  return (
    <View style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <Image
        style={styles.image}
        source={require("../../../assets/images/welcomePageImage.png")}
      ></Image>
      <Text style={styles.title}>
        My <Text style={styles.titleColored}>To Do</Text> List
      </Text>
      <Text style={styles.titleInnerText}>For your all tasks!</Text>
      <MyInput
        placeholder="Your name..."
        onChangeText={(inputValue) => setInputValue(inputValue)}
      ></MyInput>
      <View style={styles.buttonInnerContainer}>
        <MyButton
          buttonPlaceHolder="Lets Started!"
          onPress={() => navigation.navigate("Home", { userName: inputValue })}
        ></MyButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    alignSelf: "center",
  },
  title: {
    color: colors.light,
    fontSize: 40,
    textAlign: "center",
  },
  titleColored: {
    color: colors.secondary,
  },
  titleInnerText: {
    color: colors.light,
    fontSize: 16,
    marginTop: 6,
    textAlign: "center",
    marginBottom: 14,
  },
  buttonInnerContainer: {
    marginTop: 20,
  },
});
