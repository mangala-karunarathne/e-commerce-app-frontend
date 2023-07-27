import axios from "axios";
import LoginPageComponent from "./components/LoginPageComponent";
import { URL } from "../App";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "./../redux/actions/userActions";

// const loginUserApiRequest = async (email, password, doNotLogout) => {
//   try {
//     const { data } = await axios.post(`${URL}/api/users/login`, {
//       email,
//       password,
//       doNotLogout,
//     },{
//       withCredentials: true,
//     });

//     const cookiesArray = data.headers["set-cookie"];

//     cookiesArray.forEach((cookie) => {
//       document.cookie = cookie;
//     });

//     if (data.userLoggedIn.doNotLogout)
//       localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
//     else sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
//     return data;
//   } catch (err) {
//     console.err("Error fetching data:", err);
//   }
// };

axios.interceptors.response.use(
  (response) => {
    const cookiesArray = response.headers["set-cookie"];
    if (cookiesArray) {
      cookiesArray.forEach((cookie) => {
        const cookieParts = cookie.split(";")[0].split("=");
        const cookieName = cookieParts[0];
        const cookieValue = cookieParts[1];
        document.cookie = `${cookieName}=${cookieValue}; path=/;`;
      });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const loginUserApiRequest = async (email, password, doNotLogout) => {
  try {
    const { data, headers } = await axios.post(
      `${URL}/api/users/login`,
      { email, password, doNotLogout },
      { withCredentials: true }
    );

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
