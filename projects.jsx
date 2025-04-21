import { Text, Button, View, Linking, StyleSheet, Image } from "react-native";
export default function Projects() {
  const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      color: "#ff0000",
    },
    title2: {
      fontSize: 30,
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
  <Text style={[styles.white, styles.title]}>Projects!</Text>
  {/* <Text style={styles.white}>I have worked on projects like:-</Text> */}
  <Text style={styles.title2}>1. Agro Ratna V1: </Text><Text style={styles.white}>A Project Which Makes Life Easy For Farmers!</Text>
  <Text style={styles.title2}>2. Agro Ratna V2: </Text><Text style={styles.white}>A Project Still In Development & Upgraded Version Of Agro Ratna V1.</Text>
  </>
);
}
