import { ScrollView, StyleSheet, Text } from "react-native";
import NamaList from "../components/NamaList";

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tugas 4</Text>
      <Text style={styles.caption}>Muh. Dzikri Alfauzan Nuzul <br />(105841113022)</Text>
      <NamaList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#339197ff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 6,
  },
  caption: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#feeb43ff",
    marginBottom: 20,
  },
});
