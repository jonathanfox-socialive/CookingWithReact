import React from "react";
import "../css/recipe-edit.css";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({recipe}) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">name</label>
        <input type="text" name="name" id="name"  className="recipe-edit__input" value={recipe.name} />
        <label htmlFor="cookTime" className="recipe-edit__label">cook time</label>
        <input type="text" name="cookTime" id="cookTime" value={recipe.cookTime} className="recipe-edit__input" />
        <label htmlFor="servings"  className="recipe-edit__label">servings</label>
        <input type="number" min="1" name="servings" id="servings"  value={recipe.servings}  className="recipe-edit__input"  />
        <label htmlFor="instructions"  className="recipe-edit__label">instructions</label>
        <textarea name="instructions" className="recipe-edit__input" id="instructions" className="recipe-edit__input" >{recipe.instructions}</textarea>
      </div>
      <br />
      <label  className="recipe-edit__label">ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>name</div>
        <div>amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit 
            key={ingredient.id} 
            ingredient={ingredient} 
          />
        ))}
               

        {/* ingredient components */}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  );
}
