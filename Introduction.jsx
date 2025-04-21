import { Text, Button, View, Linking, StyleSheet, Image } from "react-native";
import { useState } from "react";
// import { View } from "react-native-web";
// import { TextInput } from "react-native";
export default function Introduction() {
  // window.onload = function () {
  const [Name, SetName] = useState("Shuhaab U Zamman");
  const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      color: "#ff0000",
    },
    title2: {
      fontSize: 40,
      color: "#fff",
    },
    title4: {
      fontSize: 20,
    },
    underline: {
      textDecorationLine: "underline",
      textDecorationColor: "#0000FF",
      textDecorationStyle: "solid",
      cursor: "pointer",
    },
    white: {
      color: "#fff",
    },
  });
  return (
    <>
      <View className="Main">
        <Text id="text1" className="title" style={styles.title}>
          {Name}
        </Text>
        <Button
          title="Click Me For Text Change"
          onPress={() => SetName("Daamin Asia")}
        ></Button>
        <Text className="introduction-part" style={styles.title2}>
          Introduction!
        </Text>
        <Text className="introduction-text" style={styles.white}>
          Hi There, I am Shuhaab A Web & App Developer Try to make life easier
          for people by creating projects!
        </Text>
      </View>
    </>
  );
}
