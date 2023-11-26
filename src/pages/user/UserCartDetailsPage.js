import UserCartDetailsPageComponent from "./components/UserCartDetailsPageComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import axios from "axios";
import { URL } from "../../App";

const UserCartDetailsPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

  const reduxDispatch = useDispatch();

  const config = {
    headers: {
      Authorization:
        sessionStorage.getItem("access_token") ||
        localStorage.getItem("access_token"),
    },
  };

  const getUser = async () => {
    const { data } = await axios.get(
      `${URL}/api/users/profile/` + userInfo._id,
      config
    );
    return data
  };

  return (
    <UserCartDetailsPageComponent
      cartItems={cartItems}
      itemsCount={itemsCount}
      cartSubtotal={cartSubtotal}
      userInfo={userInfo}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      reduxDispatch={reduxDispatch}
      getUser={getUser}
    />
  );
};

export default UserCartDetailsPage;
