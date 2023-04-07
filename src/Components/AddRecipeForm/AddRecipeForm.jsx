import RecipePreparationFields from "../AddRecipeForm/RecipePreparationFields/RecipePreparationFields";
import RecipeIngridientsFields from "../AddRecipeForm/RecipeIngridientsFields/RecipeIngridientsFields";
import RecipeDescriptionFields from "../AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields";
import { Button, Wrap } from "./AddrecipeForm.styled";

// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { addRecipeSchema } from "../../helpers/validations";

import { useDispatch, useSelector } from "react-redux";
import { selectIngredients } from "redux/ingredients/selectors";
import { selectCategories } from "redux/categories/selectors";
import { getCategories } from "../../redux/categories/operations";
import { getIngredients } from "../../redux/ingredients/operations";

const AddRecipeForm = () => {
  // const [formErrors, setFormErrors] = useState({});
  // const [isShowErrors, setIsShowErrors] = useState(false);
  const [isAddRecipe, setIsAddRecipe] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const [fullImage, setFullImage] = useState(null);
  const [title, setTitle] = useState(
    () => JSON.parse(localStorage.getItem("addRecipes"))?.title || ""
  );
  const [description, setDescription] = useState(
    () => JSON.parse(localStorage.getItem("addRecipes"))?.description || ""
  );
  const [category, setCategory] = useState(
    () =>
      JSON.parse(localStorage.getItem("addRecipes"))?.category || "Breakfast"
  );
  const [time, setTime] = useState(
    () => JSON.parse(localStorage.getItem("addRecipes"))?.time || "40 min"
  );
  const [selectedIngredients, setSelectedIngredients] = useState(
    () =>
      JSON.parse(localStorage.getItem("addRecipes"))?.selectedIngredients || []
  );
  const [instructions, setInstructions] = useState(
    () => JSON.parse(localStorage.getItem("addRecipes"))?.instructions || ""
  );

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: categories } = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const normalizedIngredientsList = ingredients.map(({ _id, ttl }) => ({
    _id,
    ttl,
  }));

  // const formData = useMemo(
  //   () => ({
  //     fullImage,
  //     title: title.trim(),
  //     description: description.trim(),
  //     category,
  //     time,
  //     selectedIngredients,
  //     instructions: instructions.trim(),
  //   }),
  //   [
  //     category,
  //     description,
  //     fullImage,
  //     selectedIngredients,
  //     instructions,
  //     time,
  //     title,
  //   ]
  // );

  useEffect(() => {
    localStorage.setItem(
      "addRecipes",
      JSON.stringify({
        category,
        description,
        fullImage,
        selectedIngredients,
        instructions,
        time,
        title,
      })
    );
    return () => {};
  }, [
    category,
    description,
    fullImage,
    selectedIngredients,
    instructions,
    time,
    title,
  ]);

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getCategories());
  }, [dispatch]);

  const resetDataForm = () => {
    setFullImage(null);
    localStorage.setItem("addRecipes", JSON.stringify(null));
  };

  const onDeleteIngredient = (id) => {
    const filteredData = selectedIngredients.filter((el) => el.id !== id);
    setSelectedIngredients(filteredData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (isAddRecipe) {
      return;
    }

    // const isValid = addRecipeSchema.isValidSync(formData);

    // if (!isValid) {
    //   toast.error("Not all fields were validated, follow the prompts!!");
    //   setIsShowErrors(true);
    //   return;
    // }

    setIsAddRecipe(true);

    const dataForSend = {
      fullImage,
      title: title.trim(),
      description: description.trim(),
      category,
      time: time.slice(0, time.indexOf(" ")),
      selectedIngredients: selectedIngredients,
      instructions: instructions,
    };

    console.log(dataForSend);

    resetDataForm();
  };

  return (
    <Wrap>
      <form onSubmit={onSubmitHandler}>
        <RecipeDescriptionFields
          allCategory={categories}
          image={{ fullImage, setFullImage }}
          name={{ title, setTitle }}
          descriptionData={{ description, setDescription }}
          categoryData={{ category, setCategory }}
          cokingTime={{ time, setTime }}
        />

        <RecipeIngridientsFields
          ingredients={selectedIngredients}
          setIngredients={setSelectedIngredients}
          onRemove={onDeleteIngredient}
          allIngredients={normalizedIngredientsList}
        />

        <RecipePreparationFields
          value={instructions}
          onChange={setInstructions}
        />

        <Button type="submit">Add</Button>
      </form>
    </Wrap>
  );
};

export default AddRecipeForm;
