import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ToDoItem = ({ item }) => {
	return (
		<TouchableOpacity>
			<Text style={styles.item}>{item.text}</Text>
		</TouchableOpacity>
	);
};

export default ToDoItem;

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		bordercolor: "black",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 10
	}
});
