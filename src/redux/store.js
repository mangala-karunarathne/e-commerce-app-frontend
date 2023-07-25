import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { counterReducer } from "./reducers/cartReducers";
import { userRegisterLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
  cart: counterReducer,
  userRegisterLogin: userRegisterLoginReducer,
});

const INITIAL_STATE = {
  cart:{
    value:0,
  },
  userRegisterLogin:{
    userInfo: 'user data'
  }
  
}

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
