import React from "react";

export default function RecipeIngredientEdit({ingredient}) {
  console.log(ingredient)
  return (
    <>
      <input className="recipe-edit__input" type="text"  value={ingredient.name}/>
      <input  className="recipe-edit__input" type="text" value={ingredient.amount} />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
