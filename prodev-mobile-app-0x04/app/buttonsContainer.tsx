import { View, StyleSheet } from "react-native";
import Join from "./join";
import Sign from "./Sign";

export default function ButtonsContainer() {
  return(
    <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <View style={styles.buttonGroup}>
        <Sign />
        <Join />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 20, // Added margin for better spacing
  },
});