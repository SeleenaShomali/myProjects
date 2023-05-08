import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  // done TODO step 10 : using useParams to get id for product

  const params = useParams();
  const { id } = params;
  //Done TODO step 11 : get  product by id "Get a single product" from https://fakestoreapi.com/

  // Done TODO step 12 : build Product Details Page
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Product Details </h1>
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description} </p>
        <p>{product.category} </p>
        <p>{product.price} $</p>
        <div>
          <h4> {product?.rating?.rate}</h4>
          <h4> {product?.rating?.count}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
