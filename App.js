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
	//
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
