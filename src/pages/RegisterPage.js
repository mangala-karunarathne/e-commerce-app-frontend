import axios from "axios";
import RegisterPageComponent from "./components/RegisterPageComponent";
import { URL } from "../App";

const registerUserApiRequest = async (name, lastName, email, password) => {
  const { data } = await axios.post(`${URL}/api/users/register`, {
    name,
    lastName,
    email,
    password,
  });
  return data;
};

const RegisterPage = () => {
  return <RegisterPageComponent registerUserApiRequest={registerUserApiRequest}/>;
};

export default RegisterPage;
