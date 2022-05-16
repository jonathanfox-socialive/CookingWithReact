import React, { useContext } from "react";
import { RecipeContext } from "./App";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  
  //reach into the context store to grap handleRecipeAdd function
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
}
