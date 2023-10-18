import * as actionTypes from "../constants/cartConstants";

export const addToCart = (productId, quantity) => (dispatch) => {
    console.log("productId :",productId);
    console.log("quantity :",quantity);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        someValue: 0,
    })
};