import React, { useState, useEffect } from "react";
import MealCard from "../mealCard";
const Meal = ({ strCategory }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [strCategory]);

  return (
    <div>
      <h2>Meals in {strCategory} category</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {meals !== null &&
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default Meal;
