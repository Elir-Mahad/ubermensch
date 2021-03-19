import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./ScreenStyles";

// import { useStateValue } from "./StateProvider";

function WeeklyContainer({ id, quoteText }) {
	// split apart the object, and grab the id and quote text

	return (
		<View style={styles.quote_container}>
			<ImageBackground
				// the below image wraps the whole view
				source={require("./screen_assets/black.png")}
				style={styles.backgroundimage}
				imageStyle={{ borderRadius: 5 }}
			>
				{/* The actual quote is below */}
				<View style={styles.textandquotes}>
					<Text style={styles.thequote}>{quoteText}</Text>
				</View>
				{/*  */}
			</ImageBackground>
		</View>
	);
}

export default WeeklyContainer;
