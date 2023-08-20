import { URL } from "../../App";
import ProductPageComponent from "./components/ProductPageComponent";

import axios from "axios";

const fetchProducts = async (abrtctrl) => {
  const config = {
    headers: {
      Authorization: sessionStorage.getItem("access_token") || localStorage.getItem("access_token"),
    },
  };
  const { data } = await axios.get(`${URL}/api/products/admin`,config, {
    signal: abrtctrl.signal,
  });
  return data;
};

const deleteProduct = async (productId) => {
  const { data } = await axios.delete(`${URL}/api/products/admin/${productId}`);
  return data;
};
const AdminProductsPage = () => {
  return (
    <ProductPageComponent
      fetchProducts={fetchProducts}
      deleteProduct={deleteProduct}
    />
  );
};

export default AdminProductsPage;
