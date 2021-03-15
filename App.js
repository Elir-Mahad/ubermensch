import React from "react";
import { View } from "react-native";
import AddShowDeleteTodo from "./src/AddShowDeleteTodo";
import Header from "./src/Header";

const App = () => {
	return (
		<View>
			<Header />
			<AddShowDeleteTodo />
		</View>
	);
};

export default App;
