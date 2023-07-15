import { URL } from "../../App";
import UserPageComponent from "./components/UserPageComponent";

import axios from "axios";

const fetchUsers = async (abctrl) => {
  const { data } = await axios.get(`${URL}/api/users`, {
    signal: abctrl.signal,
  });
  return data;
};

const deleteUser = async (userId) => {
  const { data } = await axios.delete(`${URL}/api/users/${userId}`);
  return data;
};

const AdminUsersPage = () => {
  return <UserPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;
