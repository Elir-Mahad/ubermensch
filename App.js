import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/Header";
import ToDoItem from "./src/ToDoItem";

export default function App() {
	//
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "create an app", key: "2" },
		{ text: "play on the switch", key: "3" }
	]);
	// the pressHandler will be used to identify which object to delete
	const pressHandler = (key) => {
		//
		setTodos((prevTodos) => {
			// Pass in our previous todo list (which is the current state)
			return prevTodos.filter(
				// filter through
				(todo) =>
					// each individual todo
					todo.key != key
				// if the key of the todo item, is not equal to the key of the item that is clicked,
				// then return the item
			);
		});
		//
	};
	return (
		<View style={styles.container}>
			{/* header */}
			<Header />
			<StatusBar style="auto" />
			{/*  */}
			<View style={styles.content}>
				{/* form */}
				<View style={styles.list}>
					{/*  */}
					<FlatList
						//
						data={todos}
						renderItem={({ item }) => (
							//
							<ToDoItem item={item} />
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	content: {
		padding: 40
	}
});
