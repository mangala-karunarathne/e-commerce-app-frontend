import UserPageComponent from "./components/UserPageComponent";
import axios from "axios"

const fetchUsers = async () => {
  const {data} = await axios.get("/api/users");
  return data
};

fetchUsers();

const AdminUserPage = () => {
  return <UserPageComponent fetchUsers={fetchUsers}/>;
};

export default AdminUserPage;
