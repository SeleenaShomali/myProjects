import React from "react";
import { Link } from "react-router-dom";
import "./mealcard.css";
const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <Link to={`/recipe/${meal.strMeal}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
};

export default MealCard;
