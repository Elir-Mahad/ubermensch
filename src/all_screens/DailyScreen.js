import React, { useState } from "react";
import styles from "../ScreenStyles";
//
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Keyboard
} from "react-native";

import { Input } from "react-native-elements";

import { StatusBar } from "expo-status-bar";
//
import DailyContainer from "../DailyContainer";
//
import { Ionicons } from "@expo/vector-icons";
//
import { useStateValue } from "../StateProvider";

//!----------------------------------------------Imports above

const DailyScreen = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue(); // Grab the basket
	const [{}, dispatch] = useStateValue(); // Dispatch the basket
	console.log(basket); // console.log the basket

	// !------------------------Above--Grab and dispatch basket

	// const [task, setTask] = useState(); This is how it was originally
	const [task, setTask] = useState("");
	// (task)  The constant task contains a string
	// (setTask) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()

	const [taskItems, setTaskItems] = useState([]);
	// (taskItems)  The constant taskItems contains an array
	// (setTaskItems) And we declare that we will mainpulate this array
	// By wrapping the string in a UseState()

	//! --------------------------------------Above--UseStates--

	const addTask = () => {
		// The constant AddTask stores a function
		Keyboard.dismiss();
		// Once the user types a new task into the input field, dismiss/hide the keyboard after the user finishes typing
		setTaskItems([...taskItems, task]);
		// Add the inputed task to the taskItems array
		setTask(null);
		// Reset the process of adding/inputing new itesm
	};

	const addToBasket = () => {
		// The constant addToBasket stores a function
		dispatch({
			// This function will dispatch
			type: "ADD_TO_BASKET",
			// the action.type 'ADD_TO_BASKET' from the reducer.js
			item: {
				// This action.type will add to the basket an item
				// id: RandomId,
				// Fetch and dispatch the id of the item that's being added
				quoteText: task
				// Fetch and dispatch the task
			}
		});
	};

	const addTaskToBasket = () => {
		// The constant addTaskToBasket stores a function that combines above two functions,
		// so when you call this function both functions will be triggered
		addTask(); // This is the first function
		addToBasket(); // This is the second function
	};

	//! ------------Above-- Functions to: add new todo task + add task to basket

	const completeTask = (index) => {
		// The constant completeTask stores a function
		let itemsCopy = [...taskItems];
		// The constant itemsCopy will store all the taskItems
		itemsCopy.splice(index, 1);
		// Then take all the items, and cut/delete the specific Item that this function is attached to
		setTaskItems(itemsCopy);
		// Then return all the items minus the deleted item
	};

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: "REMOVE_FROM_BASKET"
			// this is the action.type from the reducer.js
			// id: id
			// fetch the id of the item that's being removed
		});
	};

	const removeTaskFromBasket = () => {
		// The constant removeTaskToBasket stores a function that combines above two functions,
		// so when you call this function both functions will be triggered
		completeTask(); // This is the first function
		removeFromBasket(); // This is the second function
	};

	//! -------Above-- Functions to: remove specific todo task from array + remove task to basket

	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="dark" />

			{/* The below view will display all the added todo items */}

			<View>
				{taskItems.map((task, index) => {
					return (
						<TouchableOpacity
							key={index}
							onPress={() =>
								//
								removeTaskFromBasket(index)
							}
						>
							<DailyContainer
								//
								quoteText={task}
								// id=""
							/>
						</TouchableOpacity>
					);
				})}
			</View>

			{/* In the below view, 
			the user will write a todo task, 
			submit the todo task, 
			and add the todo task to the basket  */}

			<View style={styles.inputnicon}>
				<View style={styles.input}>
					<Input
						//
						placeholder={"Write a task"}
						//
						value={task}
						//
						onChangeText={(quotetext) =>
							//
							setTask(quotetext)
						}
						//
					/>
				</View>

				<TouchableOpacity onPress={addTaskToBasket}>
					{/*  */}
					<Ionicons name="add" size={24} color="black" />
					{/*  */}
				</TouchableOpacity>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default DailyScreen;
