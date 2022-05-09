import React, { useEffect, useState } from "react";
import "../css/app.css";
import RecipeEdit from "./RecipeEdit";
import RecipeList from "./RecipeList";

//create and export and empty 'global variable object' (a React Context) that
// allows us to access variables in a more direct way than passing props
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingwithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  //useeffect is react built in magic, that lets us execute logic, when variable values change

  // useEffect(() => {
  //  the code to execute
  //somefunction()
  //()=>{}
  // }, [the name of any variables that when changed should cause the above code to execute]);
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  //any time the recipes vairable updates, we resave
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  //adding our handleRecipeAdd, and handleRecipeDelete function into the context
  //so that other components can access these functions directly
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: Date.now().toString(),
      name: "New",
      servings: 0,
      cookTime: "1:00",
      instructions: "inst.",
      ingredients: [
        { id: Date.now().toString(), name: "name", amount: "1 tbs" },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    // we have to wrap any components that want access to our context store with Recipe.Context provider
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
