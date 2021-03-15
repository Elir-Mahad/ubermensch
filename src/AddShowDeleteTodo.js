import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
	ScrollView
} from "react-native";
import Task from "./Task";
import styles from "../ScreenStyles";

const AddShowDeleteTodo = () => {
	//
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);

	const handleAddTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask(null);
		// once the task is added, set that specific task to null,
		// therefore the user won't be able to add it again
	};

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		// the const itemscopy stores the task items
		itemsCopy.splice(index, 1);
		// splice (i.e, cut) the item from the task items list
		setTaskItems(itemsCopy);
		// the task items will now have a new list
		// the items in this new list will pulled from the const itemscopy
		// these items will include all existing items, minus the removed item
	};

	return (
		<ScrollView>
			{/* Today's Tasks */}
			<View style={styles.wholescreen}>
				<View style={styles.tasksContainer}>
					<Text style={styles.title}>Today's tasks</Text>
					<View style={styles.allItems}>
						{/* This is where the tasks will go! */}
						{taskItems.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() =>
										//
										completeTask(index)
									}
								>
									<Task text={item} />
								</TouchableOpacity>
							);
						})}
					</View>
				</View>

				{/* Write a task */}
				<View style={styles.inputandicon}>
					<TextInput
						style={styles.input}
						//
						placeholder={"Write a task"}
						//
						value={task}
						//
						onChangeText={(text) =>
							//
							setTask(text)
						}
					/>
					<TouchableOpacity onPress={handleAddTask}>
						{/*  */}
						<View style={styles.addItemsBox}>
							{/*  */}
							<Text style={styles.addedText}>+</Text>
							{/*  */}
						</View>
						{/*  */}
					</TouchableOpacity>
				</View>
				{/*  */}
			</View>
		</ScrollView>
	);
};

export default AddShowDeleteTodo;
