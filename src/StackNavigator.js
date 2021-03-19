//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// import heart/basket icon
import WeeklyIconBasket from "./WeeklyIconBasket";

// below are the different screen components
import FirstScreen from "./FirstScreen";
import UserGuide from "./UserGuide";
//
import DailyScreen from "./all_screens/DailyScreen";
import WeeklyScreen from "./all_screens/WeeklyScreen";

//
import MyMenu from "./Menu";
//

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	headerStyle: { backgroundColor: "#f4f4f2" },
	headerTitleStyle: {
		color: "black",
		fontSize: 18,
		fontFamily: "Inconsolata-Regular"
	},
	headerTintiColor: "black",
	headerRight: () => <WeeklyIconBasket />,
	headerLeft: () => <MyMenu />
};

const Stack = createStackNavigator();

const StackNavigator = () => {
	//
	return (
		<Stack.Navigator screenOptions={globalScreenOptions}>
			<Stack.Screen
				name="Übermensch" // Give the component a name
				component={FirstScreen} // Import the component
			/>
			<Stack.Screen
				name="User guide" // Give the component a name
				component={UserGuide} // Import the component
			/>
			{/*  */}
			<Stack.Screen
				name="Weekly" // Give the component a name
				component={WeeklyScreen} // Import the component
			/>
			<Stack.Screen
				name="Daily" // Give the component a name
				component={DailyScreen} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
