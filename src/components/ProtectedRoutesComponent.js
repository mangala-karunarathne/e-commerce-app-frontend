import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
import LoginPage from "./../pages/LoginPage";
import axios from "axios";
import { URL } from "../App";

const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    axios.get(`${URL}/api/get-token`).then((data) => {
      if (data.data.token) {
        setIsAuth(data.data.token);
      }
      return isAuth;
    });
  }, [isAuth]);

  if (isAuth === undefined) return <LoginPage />;

  return isAuth && admin && isAuth !== "admin" ? (
    <Navigate to="/login" />
  ) : isAuth && admin ? (
    <Outlet />
  ) : isAuth && !admin ? (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedRoutesComponent;
