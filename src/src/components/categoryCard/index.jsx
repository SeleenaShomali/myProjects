import React from "react";
import { Link } from "react-router-dom";
import "./categoryCard.css";
const CategoryCard = (props) => {
  const { category } = props;
  return (
    <Link to={`/category/${category?.strMealThumb}`}>
      <div className="product-card">
        <div>
          <img src={category?.strCategoryThumb} alt="" />

          <h3>{category?.strCategory}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
