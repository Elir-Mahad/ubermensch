//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React, { useState } from "react";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// import DrawerNavigator from "./screens/DrawerNavigator";
import StackNavigator from "./src/StackNavigator";

// below are the different screen components
import FirstScreen from "./src/FirstScreen";
//
import { StateProvider } from "./src/StateProvider";
import { initialState } from "./src/reducer.js";
import reducer from "./src/reducer";

// below are the necessary imports for custom fonts
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

//
import { MenuProvider } from "react-native-popup-menu";

//! ------------------------------------------------- getFonts function

const getFonts = () =>
	// the const getFonts stores the loaded fonts which are in the fonts folder
	Font.loadAsync({
		"Inconsolata-Regular": require("./assets/fonts/Inconsolata-Regular.ttf")
	});

//! ------------------------------------------------- APP functional component

export default function App() {
	// --- First we will initialize our fonts

	const [fontsLoaded, setFontsLoaded] = useState(false);
	// (fontsLoaded) The constant fontsLoaded is boolean with value of false
	// (setfontsLoaded) And we declare that we will mainpulate this boolean
	// By wrapping the boolean in a UseState()

	if (fontsLoaded) {
		// if the fonts are loaded
		<FirstScreen />;
		// then return the welcome screen
	} else {
		// othewrise
		return (
			<AppLoading
				// use expo app loading props
				startAsync={getFonts}
				// to get the fonts
				onFinish={() => setFontsLoaded(true)}
				// then change the boolean of the fontsLoaded constant to true
				onError={console.warn}
				// or if there is an error, then send a warning via console
			/>
		);
	}

	return (
		<NavigationContainer>
			{/* <Header
				// This header is from react-native-elements
				// We have only have to use it for the drawer navigator.
				// Explanaition regarding this is on the top of DrawerNavigator.js
				backgroundColor="darkred"
				placement="left"
				leftComponent={{ icon: "menu", color: "#fff" }}
				centerComponent={{ text: "Home", style: { color: "#fff" } }}
			/>
			<DrawerNavigator /> */}
			<StateProvider initialState={initialState} reducer={reducer}>
				<MenuProvider>
					<StackNavigator />
				</MenuProvider>
			</StateProvider>
		</NavigationContainer>
	);
}
