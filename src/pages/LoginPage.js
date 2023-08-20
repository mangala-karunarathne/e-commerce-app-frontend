import axios from "axios";
import LoginPageComponent from "./components/LoginPageComponent";
import { URL } from "../App";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "./../redux/actions/userActions";

const loginUserApiRequest = async (email, password, doNotLogout) => {
  try {
    const { data } = await axios.post(
      `${URL}/api/users/login`,
      { email, password, doNotLogout },
      { withCredentials: true }
    );
   
    if (data.userLoggedIn.doNotLogout && data.access_token)
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
    else
      sessionStorage.setItem("access_token", JSON.stringify(data.access_token));

    if (data.userLoggedIn.doNotLogout)
      localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    else sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

const LoginPage = () => {
  const reduxDispatch = useDispatch();

  return (
    <LoginPageComponent
      loginUserApiRequest={loginUserApiRequest}
      reduxDispatch={reduxDispatch}
      setReduxUserState={setReduxUserState}
    />
  );
};

export default LoginPage;
