import React, { useState } from "react";
import Meal from "../meal";

function MealPage() {
  const [category, setCategory] = useState("Seafood");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="App">
      <h1>Meal Categories</h1>
      <select value={category} onChange={handleCategoryChange}>
        <option value="Seafood">Seafood</option>
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Dessert">Dessert</option>
      </select>
      <Meal strCategory={category} />
    </div>
  );
}

export default MealPage;
