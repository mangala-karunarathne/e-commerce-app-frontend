import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { cartReducer } from "./reducers/cartReducers";
import { userRegisterLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  cart: cartReducer,
  userRegisterLogin: userRegisterLoginReducer,
});

const cratItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : sessionStorage.getItem("cart")
  ? JSON.parse(sessionStorage.getItem("cart"))
  : [];

const userInfoInLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : {};

const INITIAL_STATE = {
  cart: {
    cartItems: cratItemsInLocalStorage,
    itemsCount: cratItemsInLocalStorage ? cratItemsInLocalStorage.reduce((quantity, item)=>Number(item.quantity) + quantity,0):0,
    cartSubtotal: cratItemsInLocalStorage ? cratItemsInLocalStorage.reduce((price, item)=>price + item.price*item.quantity,0):0,
  },
  userRegisterLogin: {
    userInfo: userInfoInLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
