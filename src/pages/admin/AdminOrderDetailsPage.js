import React from "react";
import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";
import axios from "axios";
import { URL } from "../../App";

const getOrder = async (id) => {
  const { data } = await axios.get(`${URL}/api/orders/user/` + id);
  return data;
};

const AdminOrderDetailsPage = () => {
  return <OrderDetailsPageComponent getOrder={getOrder}/>;
};

export default AdminOrderDetailsPage;
