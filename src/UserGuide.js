import React from "react";
import styles from "./ScreenStyles";
//
import { Text, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";

//

const UserGuide = () => {
	return (
		<KeyboardAvoidingView style={styles.userGuideContainer}>
			{/*  */}
			<StatusBar style="dark" />
			{/*  */}
			{/* <Image
				//
				style={styles.guideimage}
				source={require("./screen_assets/info.png")}
			/> */}
			{/*  */}
			<Text style={styles.guidetext}>
				Find a quote that you like, press the heart icon of that quote.
			</Text>
			<Text style={styles.guidetext}>
				Click on the heart icon on the top right, and your liked quote/quotes
				will appear.
			</Text>
			<Text style={styles.guidetext}>
				On the top left of the quote box, you will see the name of the category
				that the quote belongs to.
			</Text>
			<Text style={styles.guidetext}>
				For example: If on the top left of the quote box, it says 'Education',
				then this means that this quote belongs to the category 'Education'.
			</Text>
			<Text style={styles.guidetext}>
				Some quotes are part of a series. If a quote is part of a series, then
				on the top right of the quote box, you will see the quote title and its
				number within the series.
			</Text>
			<Text style={styles.guidetext}>
				For example: If on the top right of the quote box, it says 'calculation
				2', then this means that this quote is the second quote of a a series
				titled calculation.
			</Text>

			{/*  */}
			<Text></Text>
		</KeyboardAvoidingView>
	);
};

export default UserGuide;
