import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}