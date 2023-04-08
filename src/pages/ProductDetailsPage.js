import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <p> This is the Product Details Page</p>
    </div>
  );
};

export default ProductDetailsPage;
