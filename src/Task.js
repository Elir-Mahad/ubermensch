import React from "react";
import styles from "../ScreenStyles";
import { View, Text } from "react-native";

const Task = (props) => {
	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View>
				<Text style={styles.itemText}>{props.text}</Text>
			</View>
		</View>
	);
};

export default Task;
