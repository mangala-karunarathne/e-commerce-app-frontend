import React from "react";
import UserChatComponent from "./UserChatComponent";
import { Outlet } from "react-router-dom";

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUserChatComponent;
