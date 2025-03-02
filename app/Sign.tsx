import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

export default function Sign() {
  return (
    <TouchableOpacity style={styles.transparentButton}>
      <Text style={styles.textSmall}>Sign In</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
});