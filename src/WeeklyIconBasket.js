import React from "react";
import styles from "./ScreenStyles";
//
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//
import { useStateValue } from "./StateProvider";

//!------------------------------------IMPORTS

const WeeklyIconBasket = () => {
	//
	const navigation = useNavigation();
	// this is necessary because the navigation was not
	// working in the same fashion as in the table of contents
	// For more info: https://github.com/react-navigation/react-navigation/issues/7961
	const [{ basket }] = useStateValue();
	//
	console.log(basket);
	//
	return (
		<TouchableOpacity
			//
			style={styles.basketandcount}
			onPress={() => navigation.navigate("Weekly")}
		>
			<FontAwesome5
				//
				name="calendar-week"
				size={24}
				color="black"
			/>
			<Text
				//
				style={styles.itemcount}
			>
				{basket?.length}
			</Text>
		</TouchableOpacity>
	);
};

export default WeeklyIconBasket;
