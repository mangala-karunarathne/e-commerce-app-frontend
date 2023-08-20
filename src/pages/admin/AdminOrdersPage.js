import React from "react";
import OrderPageComponent from "./components/OrderPageComponent";
import axios from "axios";
import { URL } from "../../App";


const getOrders = async() => {
  const config = {
    headers: {
      Authorization: sessionStorage.getItem("access_token") || localStorage.getItem("access_token"),
    },
  };
  const {data} = await axios.get(`${URL}/api/orders/admin`,config)
  return data
}

const AdminOrdersPage = () => {
  return <OrderPageComponent getOrders={getOrders}/>;
};

export default AdminOrdersPage;
