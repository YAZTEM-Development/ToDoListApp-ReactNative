import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function MyInput({ placeholder, onChangeText, value }) {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputContainer}
        placeholder={placeholder}
        placeholderTextColor={colors.primary}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingLeft: 10,
    padding: 10,
    color: colors.primary,
  },
});
