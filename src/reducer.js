// This is where the data layer logic goes

export const initialState = {
	basket: [],
	user: null
	// the data layer in the beginning is a basket with an empty array --> basket :[] ;

	// items will get added to it by the user

	// This is similar to the empty array, that is used in the constructor,
	// as a placeholder for incoming api data is being expected

	// To test whether the context api is working.
	// Comment out the above 'basket:[]'

	// Uncomment the below basket
	// basket: ["bread", "meat"]

	// This basket has two items, therefore if the context api is working
	// then, on the page, it should display the number 2 next to the basket.

	// Or uncomment the below basket
	// basket: ["bread", "meat", "pizza"]

	// This basket has three items, therefore if the context api is working
	// then, on the page, it should display the number 3 next to the basket.
};

export const getBasketTotal = (basket) =>
	// create a constant called getBasketTotal;
	// this constant has a parameter which is the actual shopping basket

	basket?.reduce((amount, item) => item.price + amount, 0);
// take the basket and return a reduce function
// reduce is a function that has two paramaters
// The first parameter is an amount:
// (the price of the item)
// The second parameter is item :
// (the item-object that you reiterate through the basket)

// add the price of the item to the original amount
// the orignal amount starts at 0
// increment all the prices of items in the basket

// After all that is done the constant will get automaticaly exported
// and it will be imported it into the subTotal.js
// ( --> CurrencyFormat -->value )

const reducer = (state, action) => {
	// The constant reducer stores a function
	// that has the two parameter state and action.

	// We refer to the data layer as state;
	// so anything inside the data layer is known as state.

	// We manipulate the data layer with actions;
	// such as: add item to basket, remove item from basket,etc

	console.log(action);

	// console log the items that are clicked on
	// this is to check that the click function is working
	// When the button is clicked, it should output
	// the action type + items object and properties in the browsers console

	// The console output shoud look like this:
	// {type: "ADD_TO_BASKET", item: {…}}
	// item:
	// id: "1235"
	// image: "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg"
	// title: "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI VGA port),Black"
	// __proto__: Object
	// type: "ADD_TO_BASKET"

	switch (action.type) {
		// switch stores an action, and the 'type' of that action
		// switch also checks all the cases.
		// cases are strings that represent a specific action

		case "SET_USER":
			return {
				...state,
				user: action.user
			};

		case "ADD_TO_BASKET":
			// This  first case "ADD_TO_BASKET"
			// represent the action of adding an item to the basket
			// Below is the Logic for adding an item to the basket

			return {
				// After the item that has been clicked on,
				// is added to the basket, return:

				...state,
				// Return whatever the state currently is

				basket: [...state.basket, action.item]
				// Return a new basket that's going to contain:
				// The current basket (whatever items were left over) --> ...state.basket
				// + the item that was just picked --> action.item

				// So if you picked one item,
				// then the new basket will contain:
				// the 4 leftover items + the item that was previously picked.
				// Which will be a total of 5 items.

				// IMPORTANT:
				// action.item gets the data points
				// that we asked from in the addtobasket function.
				// This function is in the product.js
			};
		// break; // this break signifies that the case logic is finished

		case "REMOVE_FROM_BASKET":
			// This second case "REMOVE_FROM_BASKET"
			// represent the action of removing an item from the basket
			// Below is the Logic for removing item from basket

			let newBasket = [...state.basket];
			// The constant new basket store whatever the current basket is.
			// Here we are simply cloning the basket,
			// into our own variable which is: newBasket.

			const index =
				// The constant index stores a process.
				// This process will:
				state.basket
					// Take the current basket
					.findIndex(
						// Find the exact index
						(basketItem) =>
							// of the basket item that was clicked on
							basketItem.id === action.id
						// check if the action.id of this item
						// exists in the basket
					);

			console.log(action.id);

			// To successfully remove an item from the basket we need:

			// [1] Identify the item's action.id

			// Whenever an items remove button is pressed
			// the removeFromBasket function (in CheckoutProduct.js)
			// dispatches the id of that item.
			// This dispatching is formally identified as an 'action'.
			// And the thing being dispatched is the item's ID.
			// In the index constant,  we pull the id of the item
			// that's been dispatched --> action.id.

			// [2] Identify the item's exact location in basket.

			// The findIndex() method helps us to do this.
			// This method is useful because it only returns
			// the first array element that matches the action.id.
			// So if the basket contains 2 items that have the similar id
			// only the item that was clicked will be removed.
			// To learn more about this method click here:
			// https://www.programiz.com/javascript/library/array/findindex

			// So, when the action.id is dispatched:
			// [a] get the dispatched id (action.id) of the item
			// whose remove button was just pressed.
			// [b] Check to see if the id of this item,
			// is equivalent to the id of any items
			// that are currently in the basket
			// [c] find the exact location of this item via findindex()

			if (index >= 0) {
				// If the item that was clicked upon exists in the basket
				newBasket
					// then get the newbasket
					// (which is the constant that stores our actual basket),
					.splice(index, 1);
				// splice (cut out) this item based on its index location and id
			} else {
				// otherwise produce the console warning
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in the basket`
				);
			}
			return {
				...state,
				// then return the state
				basket: newBasket
				// set the basket to the new basket
				// Hence, the basket now will return the updated items after the item removal.
			};
		// break; // this break signifies that the case logic is finished

		default:
			return state;
	}
};

export default reducer;
