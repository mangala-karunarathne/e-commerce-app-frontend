import axios from "axios";
import UserProfilePageComponent from "./components/UserProfilePageComponent";
import { URL } from "../../App";

const UserProfilePage = () => {
  const config = {
    headers: {
      Authorization:
        sessionStorage.getItem("access_token") ||
        localStorage.getItem("access_token"),
    },
  };

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
    const { data } = await axios.put(`${URL}/api/users/profile`, config, {
      name,
      lastName,
      phoneNumber,
      address,
      country,
      zipCode,
      city,
      state,
      password,
    });
    return data;
  };
  return <UserProfilePageComponent updateUserApiRequest={updateUserApiRequest} />;
};

export default UserProfilePage;
