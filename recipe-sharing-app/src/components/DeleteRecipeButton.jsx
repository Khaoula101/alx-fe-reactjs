import { useRecipeStore } from "../store/recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to the homepage after deletion
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: "20px" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
