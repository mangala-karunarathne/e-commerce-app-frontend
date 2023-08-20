import axios from "axios";
import { LOGIN_USER, LOGOUT_USER } from "../constants/userConstants";
import { URL } from "../../App";

export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: userCreated,
  });
};

export const logout = () => (dispatch) => {
  document.location.href = "/login";
  axios.get(`${URL}/api/logout`);
  localStorage.removeItem("access_token");
  localStorage.removeItem("userInfo");
  sessionStorage.removeItem("userInfo");
  sessionStorage.removeItem("access_token");
  localStorage.removeItem("cart");
  dispatch({ type: LOGOUT_USER });
};
