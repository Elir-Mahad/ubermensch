import React from "react";
import styles from "./ScreenStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger
} from "react-native-popup-menu";
import { View, Text, Image } from "react-native";

const MyMenu = () => {
	//
	const navigation = useNavigation();
	//
	return (
		<View>
			<Menu>
				<MenuTrigger
					//
					style={styles.menuicon_trigger}
				>
					<Feather name="menu" size={24} color="black" />
				</MenuTrigger>
				{/*  */}
				<MenuOptions
					//
					style={styles.menuoptionsbox}
				>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Übermensch")}
					>
						<Text style={styles.menu_categoryname}> Übermensch </Text>
						{/* <Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/samurai.png")}
						/> */}
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("User guide")}
					>
						<Text style={styles.menu_categoryname}> User guide </Text>
						{/* <Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/info.png")}
						/> */}
					</MenuOption>
					{/*  */}
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Daily")}
					>
						<Text style={styles.menu_categoryname}> Daily </Text>
						{/* <Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/education.png")}
						/> */}
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Weekly")}
					>
						<Text style={styles.menu_categoryname}> Weekly </Text>
						{/* <Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/character.png")}
						/> */}
					</MenuOption>
					{/*  */}
				</MenuOptions>
			</Menu>
		</View>
	);
};

export default MyMenu;
