import React from "react";
import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";
import axios from "axios";
import { URL } from "../../App";

const getOrder = async (id) => {
  const { data } = await axios.get(`${URL}/api/orders/user/` + id);
  return data;
};

const markAsDelivered = async (id) => {
  const { data } = await axios.put(`${URL}/api/orders/delivered/` + id);
  if (data) {
    return data;
  }
};

const AdminOrderDetailsPage = () => {
  return <OrderDetailsPageComponent getOrder={getOrder} markAsDelivered={markAsDelivered}/>;
};

export default AdminOrderDetailsPage;
