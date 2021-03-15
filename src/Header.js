import React from "react";
import { Text, View } from "react-native";
import styles from "../ScreenStyles";

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.headertitle}>To do app </Text>
		</View>
	);
};

export default Header;
