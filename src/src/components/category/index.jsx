import React, { useState } from "react";

import { useEffect } from "react";
import CategoryCard from "../categoryCard";
const Category = () => {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data.categories);
        console.log("data.categories)", data.categories);
      });
  }, []);

  return (
    <div className="home-div">
      {<h1>The MealDB </h1>}
      <div className="filter-div"></div>
      {<p>done by seleena shomali</p>}
      <div className="product-list">
        {categorys.map((category) => {
          return <CategoryCard category={category} key={category.categories} />;
        })}
      </div>
    </div>
  );
};
export default Category;
