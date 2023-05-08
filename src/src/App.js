import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router";
import Category from "./components/category";
import Meal from "./components/meal";
import { BrowserRouter } from "react-router-dom";
import MealPage from "./components/mealPage";
import Recipe from "./components/recipe/recipeDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/recipe/:recipeName" element={<Recipe />} />
          <Route path="/category/:strCategory" element={<MealPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
