//
import React from "react";
import styles from "./ScreenStyles";
//
import {
	//
	Text
	// View,
	// ImageBackground
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//

//!------------------------------------------------------------IMPORTS

const FirstScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.First_container}>
			{/*  */}
			<StatusBar style="dark" />
			{/*  */}
			{/* <ImageBackground
				source={require("./screen_assets/samurai_guard.jpg")}
				style={styles.FirstBackgroundImage}
				imageStyle={{ borderRadius: 5 }}
			> */}
			<Text> First Screen </Text>
			{/*  */}
			{/* </ImageBackground> */}
		</KeyboardAvoidingView>
	);
};
export default FirstScreen;
