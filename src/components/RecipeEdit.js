import React from "react";
import "../css/recipe-edit.css";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cookTime">cook time</label>
        <input type="text" name="cookTime" id="cookTime" />
        <label htmlFor="servings">servings</label>
        <input type="numer" min="1" name="servings" id="servings" />
        <label htmlFor="instructions">instructions</label>
        <textarea name="instructions" id="instructions"></textarea>
      </div>
      <br />
      <label>ingredients</label>
      <div>
        <div>name</div>
        <div>amount</div>
        <div></div>
        <RecipeIngredientEdit />
        {/* ingredient components */}
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  );
}
