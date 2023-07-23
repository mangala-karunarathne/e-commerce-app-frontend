import axios from "axios";
import LoginPageComponent from "./components/LoginPageComponent";
import { URL } from "../App";

const LoginPage = () => {
  const loginUserApiRequest = async (email, password, doNotLogout) => {
    const { data } = await axios.post(`${URL}/api/users/login`, {
      email,
      password,
      doNotLogout,
    });
    return data;
  };

  return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} />;
};

export default LoginPage;
