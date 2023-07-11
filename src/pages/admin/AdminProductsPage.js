import ProductPageComponent from "./components/ProductPageComponent";

import axios from "axios";

const fetchProducts = async (abrtctrl) => {
  const { data } = await axios.get("/api/products/admin", {
    signal: abrtctrl.signal,
  });
  return data;
};

const AdminProductsPage = () => {
  return <ProductPageComponent fetchProducts={fetchProducts}/>;
};

export default AdminProductsPage;
