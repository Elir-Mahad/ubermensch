import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ToDoItem = ({ item, pressHandler }) => {
	//
	return (
		<TouchableOpacity
			//
			onpress={() => pressHandler(item.key)}
		>
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
