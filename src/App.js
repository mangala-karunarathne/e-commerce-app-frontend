import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
      <Route path="/product-list" element={<ProductListPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="*" element="404 | Page Not Found "/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
