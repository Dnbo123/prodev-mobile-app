import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground, Dimensions, View, Text, TouchableOpacity, Image } from "react-native";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex:1 }}>
        <ImageBackground
        source={require("@/assets/images/background-image.png")}
        style={styles.background}
        >
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
    </ImageBackground>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
