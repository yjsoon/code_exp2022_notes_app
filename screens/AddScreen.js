import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function AddScreen({ navigation }) {
  const [text, setText] = useState("Hello");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.label}>Add your Todo!</Text>
      <TextInput style={styles.textInput} value={text} onChangeText={(newText) => setText(newText)} />
      <View style={styles.buttons}>
        <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={() => navigation.navigate("Notes", { text })}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 40, color: "grey" }}>
        This is what you typed:
      </Text>
      <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 24,
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  submitButton: {
    backgroundColor: "orange",
  },
  cancelButton: {
    backgroundColor: "red",
  },
});
