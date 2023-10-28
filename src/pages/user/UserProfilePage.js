import axios from "axios";
import UserProfilePageComponent from "./components/UserProfilePageComponent";
import { URL } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUserState } from "../../redux/actions/userActions";

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
  const config = {
    headers: {
      Authorization:
        sessionStorage.getItem("access_token") ||
        localStorage.getItem("access_token"),
    },
  };
  console.log("config", config);
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

const fetchUser = async (id) => {
  const config = {
    headers: {
      Authorization:
        sessionStorage.getItem("access_token") ||
        localStorage.getItem("access_token"),
    },
  };
  console.log("config", config);
  try {
    const { data } = await axios.get(`${URL}/api/users/profile/` + id, config);
    return data;
  } catch (error) {
    console.error("Error Fetching user profile:", error);
    throw error;
  }
};

const UserProfilePage = () => {
  const reduxDispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);

  return (
    <UserProfilePageComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
      userInfoFromRedux={userInfo}
      setReduxUserState={setReduxUserState}
      reduxDispatch={reduxDispatch}
      localStorage={window.localStorage}
      sessionStorage={window.sessionStorage}
    />
  );
};

export default UserProfilePage;
