import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
import LoginPage from "./../pages/LoginPage";
import axios from "axios";
import { URL } from "../App";
import Cookies from "js-cookie";
// access_token issue
// This api route is called when success login user / admin goes to their role based routes in React(FE) App.js.... At that routes are wrapped by protected routes component and inside there authenticated user role going to check by calling this API. Already it simulated without using this get token API. Here it's going to use cookies intead of token as headers. 

// const ProtectedRoutesComponent = ({ admin }) => {
//   const [isAuth, setIsAuth] = useState();

//   useEffect(() => {
//     const access_token = localStorage.getItem("access_token");
//     axios
//       .get(`${URL}/api/get-token`, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       })
//       .then(function (response) {
//         if (response.data.token) {
//           setIsAuth(response.data.token);
//         }
//       })
//       .catch(function (error) {
//         console.error("An error occurred:", error);
//       });
//   }, [isAuth]);

//   if (isAuth === undefined && !admin) return <Navigate to="/user/my-orders" />;
//   if (isAuth === undefined && admin) return <Navigate to="/admin/orders" />;

//   // if (isAuth === undefined) return <LoginPage />;

//   // return isAuth && admin && isAuth !== "admin" ? (
//   //   <Navigate to="/login" />
//   // ) : isAuth && admin ? (
//   //   <Outlet />
//   // ) : isAuth && !admin ? (
//   //   <>
//   //     <UserChatComponent />
//   //     <Outlet />
//   //   </>
//   // ) : (
//   //   <Navigate to="/login" />
//   // );
// };
// export default ProtectedRoutesComponent;

const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};
export default ProtectedRoutesComponent;
