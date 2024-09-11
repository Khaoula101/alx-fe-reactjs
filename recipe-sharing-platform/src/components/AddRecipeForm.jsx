import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = validate();
    setErrors(validationErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      console.log({
        title,
        ingredients: ingredients.split(","),
        steps: steps.split("."),
      });

      // Reset the form after submission
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Submit a New Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? "border-red-500" : ""
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic mt-2">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ingredients"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.ingredients ? "border-red-500" : ""
            }`}
            placeholder="Enter ingredients, separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.ingredients}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="steps"
          >
            Preparation Steps (period-separated)
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.steps ? "border-red-500" : ""
            }`}
            placeholder="Enter preparation steps, separated by periods"
          />
          {errors.steps && (
            <p className="text-red-500 text-xs italic mt-2">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
