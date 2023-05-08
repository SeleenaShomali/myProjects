import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../recipeCard";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeName } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
      });
  }, [recipeName]);

  if (!recipe) return null;

  return (
    <div>
      <RecipeCard recipe={recipe} />
    </div>
  );
};

export default Recipe;
