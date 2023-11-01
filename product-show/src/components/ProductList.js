import React from "react";
import Product from "../components/Product";

const ProductList = ({ products }) => {
  return (
    <div id="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
