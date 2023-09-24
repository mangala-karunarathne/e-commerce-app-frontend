import axios from "axios";
import UserProfilePageComponent from "./components/UserProfilePageComponent";
import { URL } from "../../App";
import { useSelector } from "react-redux";

const config = {
  headers: {
    Authorization:
      sessionStorage.getItem("access_token") ||
      localStorage.getItem("access_token"),
  },
};
console.log("config", config);

const updateUserApiRequest = async (
  name,
  lastName,
  phoneNumber,
  address,
  country,
  zipCode,
  city,
  state,
  password
) => {
  try {
    const { data } = await axios.put(
      `${URL}/api/users/profile`,
      {
        name,
        lastName,
        phoneNumber,
        address,
        country,
        zipCode,
        city,
        state,
        password,
      },
      config
    );
    return data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

const fetchUser = async (user_id) => {
  const { data } = await axios.get(`${URL}/api/users/profile`+ user_id, config);
  return data;
};

const UserProfilePage = () => {

const {userInfo} = useSelector((state) => state.userRegisterLogin);

  return (
    <UserProfilePageComponent updateUserApiRequest={updateUserApiRequest} fetchUser={fetchUser} userInfo={userInfo}/>
  );
};

export default UserProfilePage;
