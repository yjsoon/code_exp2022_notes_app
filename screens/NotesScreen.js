import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function NotesScreen({ navigation }) {
  // Create state variable for our notes
  const [notes, setNotes] = useState([
    { title: "Walk the dog", done: false, id: "0" },
    { title: "Water the plants", done: false, id: "" },
  ]);

  function addNote() {
    navigation.navigate("Add Note");
  }

  // This adds the new note button in the header
  useEffect(() => {
    console.log("This effect happened!!!!");
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <Entypo
            name="new-message"
            size={24}
            color="black"
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      ),
    });
  });

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, textAlign: "left" }}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
});
