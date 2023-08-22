import axios from "axios";
import RegisterPageComponent from "./components/RegisterPageComponent";
import { URL } from "../App";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

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
  const reduxDispatch = useDispatch();
  return (
    <RegisterPageComponent registerUserApiRequest={registerUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState}/>
  );
};

export default RegisterPage;
