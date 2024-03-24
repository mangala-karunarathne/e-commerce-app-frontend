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

const loadPayPalScript = () => {
  loadScript({
    "client-id": "ARZSc3ZTEz7iPo8TaqVA224YABlusXGuWf7KafM5dDwCu04Op2f9bHaOO5hDPGnIuoLl-iJMhMPV_YMi"
  })
  .then((paypal) => {
    paypal.Buttons({
      createOrder: createPayPalOrderHandler,
      onCancel: onCancelHandler,
      onApprove: onApproveHandler,
      onError: onErrorHandler,
    }).render("#paypal-container-element");
  })
  .catch((err) => {
    console.log("failed to load the PayPal JS SDK script", err);
  })
}

const createPayPalOrderHandler = () => {
  console.log("createPayPalOrderHandler")
}

const onCancelHandler = () => {
  console.log("onCancelHandler")
}

const onApproveHandler = () => {
  console.log("onApproveHandler")
}

const onErrorHandler = () => {
  console.log("onErrorHandler")
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
      loadPayPalScript={loadPayPalScript} 
    />
  );
};

export default UserOrderDetailsPage;
