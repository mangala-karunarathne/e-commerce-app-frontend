import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
  itemsCount: 0,
  cartSubtotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productBeingAddedToCart = action.payload;
      const productAlreadyExistInState = state.cartItems.find(
        (x) => x.productId === productBeingAddedToCart.productId
      );

      const currentState = { ...state };

      if (productAlreadyExistInState) {
        currentState.itemsCount = 0;
        currentState.cartSubtotal = 0;
        // currentState.cartItems = productAlreadyExistInState;
        currentState.cartItems = state.cartItems.map((x) => {
          if (x.productId === productAlreadyExistInState.productId) {
            currentState.itemsCount += Number(productBeingAddedToCart.quantity);
            const sum =
              Number(productBeingAddedToCart.quantity) *
              Number(productBeingAddedToCart.price);
            currentState.cartSubtotal += sum;
          } else {
            currentState.itemsCount += Number(x.quantity);
            const sum = Number(x.quantity) * Number(x.price);
            currentState.cartSubtotal += sum;
          }
          return x.productId === productAlreadyExistInState.productId
            ? productBeingAddedToCart
            : x;
        });
      } else {
        currentState.itemsCount += Number(productBeingAddedToCart.quantity);
        const sum =
          Number(productBeingAddedToCart.quantity) *
          Number(productBeingAddedToCart.price);
        currentState.cartSubtotal += sum;
        currentState.cartItems = [...state.cartItems, productBeingAddedToCart];
      }

      return currentState;
    default:
      return state;
  } 
};
