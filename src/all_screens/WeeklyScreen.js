import React from "react";
import styles from "../ScreenStyles";
//
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { useStateValue } from "../StateProvider";
//
import WeeklyContainer from "../WeeklyContainer";
//!------------------------------------------------------------IMPORTS

const WeeklyScreen = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT
	//
	return (
		<ScrollView style={styles.category_screen}>
			{/*  */}
			<StatusBar style="dark" />
			{/*  */}
			{/*  */}
			<View>
				{basket.length === 0 ? ( // if the basket is empty, has no items, then return the below div
					<View style={styles.nolikedqotescontainer}>
						<Text style={styles.nolikedquotestext}>
							{" "}
							You have no tasks for this week
						</Text>
					</View>
				) : (
					// other wise (i.e, if the basket is not empty) return the below div

					<View>
						<Text style={styles.likedquotestitle}> Weekly Schedule </Text>

						{/* list all the checkout products */}

						{/* for every single item, return the checkout products component */}

						{basket.map((item, index) => (
							<WeeklyContainer
								//
								key={index}
								// id={item.id}
								// adding this will stop this error:
								// 'Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.'
								// More info here: programmersought.com/article/66582053289/
								quoteText={item.quoteText}
							/>
						))}
					</View>
				)}
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default WeeklyScreen;
