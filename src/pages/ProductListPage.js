import axios from "axios";
import ProductListPageComponent from "./components/ProductListPageComponent";
import { URL } from "../App";

const getProducts = async () => {
  const config = {
    headers: {
      Authorization: sessionStorage.getItem("access_token") || localStorage.getItem("access_token"),
    },
  };
  const { data } = await axios.get(`${URL}/api/products`, config);
  return data
};

const ProductListPage = () => {
  return <ProductListPageComponent getProducts={getProducts}/>;
};

export default ProductListPage;
