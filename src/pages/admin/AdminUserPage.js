import { URL } from "../../App";
import UserPageComponent from "./components/UserPageComponent";

import axios from "axios";

const fetchUsers = async (abctrl) => {
  const config = {
    headers: {
      Authorization: sessionStorage.getItem("access_token") || localStorage.getItem("access_token"),
    },
  };
  const { data } = await axios.get(`${URL}/api/users`,config, {
    signal: abctrl.signal,
  });
  return data;
};

const deleteUser = async (userId) => {
  const config = {
    headers: {
      Authorization: sessionStorage.getItem("access_token") || localStorage.getItem("access_token"),
    },
  };
  const { data } = await axios.delete(`${URL}/api/users/${userId}`, config);
  return data;
};

const AdminUsersPage = () => {
  return <UserPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;
