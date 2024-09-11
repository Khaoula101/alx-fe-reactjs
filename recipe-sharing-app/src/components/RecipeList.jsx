import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>

            {/* Add or Remove from Favorites */}
            {isFavorite(recipe.id) ? (
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>
                Add to Favorites
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
