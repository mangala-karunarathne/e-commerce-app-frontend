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
        currentState.cartItems = productAlreadyExistInState;
      } else {
        currentState.itemsCount = "x";
        currentState.cartSubtotal = "x";
      }

      return currentState;
    default:
      return state;
  }
};
