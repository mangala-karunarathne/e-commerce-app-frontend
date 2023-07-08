import UserPageComponent from "./components/UserPageComponent";

import axios from "axios";

const fetchUsers = async (abctrl) => {
    const {data} = await axios.get("/api/users", {
        signal: abctrl.signal,
    });
    return data
}
const AdminUsersPage = () => {
  return <UserPageComponent fetchUsers={fetchUsers} />;
};

export default AdminUsersPage;

