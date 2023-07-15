import React from "react";
import OrderPageComponent from "./components/OrderPageComponent";
import axios from "axios";
import { URL } from "../../App";


const getOrders = async() => {
  const {data} = await axios.get(`${URL}/api/orders/admin`)
  return data
}

const AdminOrdersPage = () => {
  return <OrderPageComponent getOrders={getOrders}/>;
};

export default AdminOrdersPage;
