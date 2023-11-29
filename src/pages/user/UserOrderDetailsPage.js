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


const UserOrderDetailsPage = () => {
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo)
  return (
    <UseerOrderDetailsPageComponent userInfo={userInfo}/>
  );
};

export default UserOrderDetailsPage;
