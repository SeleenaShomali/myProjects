import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <p>Instructions: {recipe.strInstructions}</p>
      <ul>
        {Object.keys(recipe).map((key) => {
          if (key.includes("Ingredient") && recipe[key]) {
            return (
              <li key={key}>
                {recipe[key]} - {recipe[`strMeasure${key.slice(13)}`]}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default RecipeCard;
