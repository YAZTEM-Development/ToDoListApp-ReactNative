import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";

export default function MyButton({ buttonPlaceHolder, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonPlaceHolderStyle}>{buttonPlaceHolder}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 50,
  },
  buttonPlaceHolderStyle: {
    color: colors.light,
    textAlign: "center",
  },
});
