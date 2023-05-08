import React, { useState } from "react";
import "./home.css";
import { useEffect } from "react";
import ProductCard from "../../components/productCard";

const Home = () => {
  //Done// TODO Step 1 : get all product from https://fakestoreapi.com/
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-div">
      {/* Filter */}
      <div className="filter-div"></div>
      {/* Product List */}
      <div className="product-list">
        {
          // DOne //TODO Step 2 : using ProductCard to display all products by using map
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Home;
