import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("notes.db");

function NotesScreen({ navigation }) {
  // Create state variable for our notes
  const [notes, setNotes] = useState([
    { title: "Walk the dog", done: false, id: "0" },
    { title: "Water the plants", done: false, id: "" },
  ]);

  function addNote() {
    let newNote = {
      title: "Sample new note",
      done: false,
      id: notes.length.toString(),
    };
    setNotes([...notes, newNote]);
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
        style={{ padding: 10, borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      >
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            title: "Todo or Notes App IDK",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: "orange",
              height: 120,
              borderBottomColor: "#999",
              borderBottomWidth: 2,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
