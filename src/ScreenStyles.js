import { StyleSheet } from "react-native";

export default StyleSheet.create({
	//On all screens
	// menu
	menuicon_trigger: {
		marginLeft: 10
	},
	menu_category: {
		height: 55,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1
	},
	menu_categoryname: {
		fontFamily: "Inconsolata-Regular",
		color: "black",
		fontSize: 17,
		marginBottom: 5
	},
	menu_categoryimage: {
		width: 30,
		height: 30,
		marginRight: 7
	},
	//
	basketandcount: {
		marginRight: 10,
		paddingRight: 30,
		paddingTop: 15
	},
	itemcount: {
		position: "absolute",
		height: 33,
		width: 30,
		borderRadius: 15,
		backgroundColor: "black",
		color: "white",
		right: 0,
		bottom: 10,
		padding: 7,
		alignItems: "center",
		textAlign: "center",
		justifyContent: "center"
	},
	// user guide
	userGuideContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white"
	},
	guideimage: {
		width: 60,
		height: 60
	},
	guidetext: {
		fontFamily: "Inconsolata-Regular",
		fontSize: 15,
		marginRight: 15,
		marginLeft: 15,
		color: "black",
		padding: 10,
		borderBottomWidth: 1,
		borderColor: "lightgrey"
	},
	// Styles for FirstScreen
	//
	welcome_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	WelcomeBackgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		justifyContent: "center",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	//LikeQuotesScreen
	nolikedqotescontainer: {
		backgroundColor: "black",
		padding: 10
	},
	nolikedquotestext: {
		fontFamily: "Inconsolata-Regular",
		color: "white",
		fontSize: 20,
		textAlign: "center",
		padding: 5
	},
	likedquotestitle: {
		fontFamily: "Inconsolata-Regular",
		textAlign: "center",
		fontSize: 17,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		backgroundColor: "white"
	},
	// Other Quotes Container styles
	//
	category_screen: {
		backgroundColor: "#e6e6e6",
		paddingTop: 20
	},
	backgroundimage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	quote_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		margin: 15
	},
	textandquotes: {
		padding: 30
	},
	thequote: {
		fontFamily: "Inconsolata-Regular",
		color: "white",
		fontSize: 23,
		padding: 5,
		textAlign: "left"
	},
	inputnicon: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
		// backgroundColor: "red"
	},
	input: {
		// backgroundColor: "green",
		width: "80%"
	}
});
