import axios from "axios";
import LoginPageComponent from "./components/LoginPageComponent";
import { URL } from "../App";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "./../redux/actions/userActions";
import Cookies from "js-cookie";

// axios.interceptors.response.use(
//   (response) => {
//     const cookiesArray = response.headers["set-cookie"];
//     console.log("cookiesArray", cookiesArray);
//     if (cookiesArray) {
//       cookiesArray.forEach((cookie) => {
//         const cookieParts = cookie.split(";")[0].split("=");
//         const cookieName = cookieParts[0];
//         const cookieValue = cookieParts[1];
//         document.cookie = `${cookieName}=${cookieValue}; path=/;`;
//       });
//     }

//     Cookies.set("myCookie", "cookieValue", { expires: 7 });

//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const loginUserApiRequest = async (email, password, doNotLogout) => {
  try {

    const { data } = await axios.post(
      `${URL}/api/users/login`,
      { email, password, doNotLogout },
      { withCredentials: true }
    );
   
    // access_token isse
    // accessing cookies coused issue due to unawareness, so tried to get access_token as just a response
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
