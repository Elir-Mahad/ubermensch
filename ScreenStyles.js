import { StyleSheet } from "react-native";

export default StyleSheet.create({
	//
	header: {
		padding: 30,
		backgroundColor: "lightblue"
	},
	headertitle: {
		textAlign: "center",
		color: "black",
		fontSize: 30,
		fontWeight: "bold"
	},
	//show/delete items
	wholescreen: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "white"
	},
	tasksContainer: {
		padding: 10,
		marginBottom: 30,
		backgroundColor: "lightgrey"
	},
	title: {
		fontSize: 24,
		fontWeight: "bold"
	},
	//add items
	inputandicon: {
		display: "flex",
		flexDirection: "row"
	},
	input: {
		paddingHorizontal: 15,
		borderRadius: 60,
		borderColor: "#C0C0C0",
		borderWidth: 1,
		width: 250,
		marginRight: 5
	},
	addItemsBox: {
		width: 60,
		height: 60,
		backgroundColor: "#FFF",
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#C0C0C0",
		borderWidth: 1
	},
	addedText: {},
	// task
	item: {
		borderBottomWidth: 1,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20
	},
	itemLeft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap"
	},
	square: {
		width: 24,
		height: 24,
		backgroundColor: "#55BCF6",
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15
	},
	itemText: {
		maxWidth: "80%"
	}
});
