import axios from "axios";
import { URL } from "../../App";
import * as actionTypes from "../constants/cartConstants";

export const addToCart = (productId, quantity) => async(dispatch) => {
    const {data} = await axios.get(`${URL}/api/products/get-one/${productId}`)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            productId: data._id,
            name: data.name,
            price: data.price,
            image: data.images[0] ?? null,
            count: data.count,
            quantity,
        },
    })
};