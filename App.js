import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Introduction from "./Introduction";
import Projects from "./projects";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Introduction />
      <Projects />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
