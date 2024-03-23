import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";
import UseerOrderDetailsPageComponent from "./components/UseerOrderDetailsPageComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../../App";
import { loadScript } from "@paypal/paypal-js";

const getOrder = async (orderId) => {
  const config = {
    headers: {
      Authorization:
      sessionStorage.getItem("access_token") ||
      localStorage.getItem("access_token"),
    },
  };
  const { data } = await axios.get(
    `${URL}/api/orders/user/` + orderId, 
    config
  );
  
  return data;
}


const UserOrderDetailsPage = () => {
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);
  const getUser = async () => {
    
    const config = {
      headers: {
        Authorization:
        sessionStorage.getItem("access_token") ||
        localStorage.getItem("access_token"),
      },
    };
    
    const  {data}  = await axios.get(
      `${URL}/api/users/profile/` + userInfo._id,
      config
      );
      return data;
    };

  // console.log("sad", getUser);

  return (
    <UseerOrderDetailsPageComponent 
      userInfo={userInfo} 
      getUser={getUser} 
      getOrder={getOrder} 
      loadScript={loadScript} 
    />
  );
};

export default UserOrderDetailsPage;
