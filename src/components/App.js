import React, { useEffect, useState } from "react";
import "../css/app.css";
import RecipeEdit from "./RecipeEdit";
import RecipeList from "./RecipeList";

//create and export and empty 'global variable object' (a React Context) that
// allows us to access variables in a more direct way than passing props
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingwithReact.recipes";

function App() {
  // use the react useState hook format to set a state variable named selectedRecipeId,
  // a function to update the state variable (setSelectedRecipeId)
  // and a default value of undefined

  // state vairable name, function to updayte the state variable = useState(startingValue for the state variable)
  const [selectedRecipeId, setSelectedRecipeId] = useState()

  const [recipes, setRecipes] = useState(sampleRecipes);

  //sets a variable named selectedRecipe that finds the entire recipe from the recipe list based
  // on whatever selectedRecipeId is 
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);



  // function that calls our setSelectedRecipeId function
  function handleRecipeSelect(id) {
    //sets the selectedRecipeId state variable to whatever the id parameter is
    setSelectedRecipeId(id)
  }
 
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
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
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {/* // pass in the sleecredrecipe vaierbLE TO RECIPEEDITR */}
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
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
