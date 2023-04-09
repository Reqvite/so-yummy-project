import RecipePreparationFields from "../AddRecipeForm/RecipePreparationFields/RecipePreparationFields";
import RecipeIngridientsFields from "../AddRecipeForm/RecipeIngridientsFields/RecipeIngridientsFields";
import RecipeDescriptionFields from "../AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields";
import { Button, Form } from "./AddrecipeForm.styled";
import { addRecipe } from "../../redux/recipes/operations";

// import { toast } from "react-toastify";
import { useState, useEffect, useMemo, useCallback } from "react";
import { addRecipeSchema } from "../../helpers/validations";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectIngredients } from "redux/ingredients/selectors";
import { selectCategories } from "redux/categories/selectors";
import { getCategories } from "../../redux/categories/operations";
import { getIngredients } from "../../redux/ingredients/operations";

const AddRecipeForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isShowErrors] = useState(false);

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
    () => JSON.parse(localStorage.getItem("addRecipes"))?.time || "15 min"
  );
  const [selectedIngredients, setSelectedIngredients] = useState(
    () =>
      JSON.parse(localStorage.getItem("addRecipes"))?.selectedIngredients || []
  );
  const [instructions, setInstructions] = useState(
    () => JSON.parse(localStorage.getItem("addRecipes"))?.instructions || ""
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: categories } = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  const formData = useMemo(
    () => ({
      fullImage,
      title: title.trim(),
      description: description.trim(),
      category,
      time,
      selectedIngredients,
      instructions: instructions.trim(),
    }),
    [
      category,
      description,
      fullImage,
      selectedIngredients,
      instructions,
      time,
      title,
    ]
  );

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

  useEffect(() => {
    if (!isShowErrors) return;

    const createObjErrorResipeForm = (acc, curr) => {
      if (curr.path.includes("].")) {
        const el = curr.path;
        const currPath = el.slice(0, el.indexOf("["));
        const index = +el.slice(el.indexOf("[") + 1, el.indexOf("]"));
        if (!acc[currPath]) {
          acc[currPath] = [];
        }
        acc[currPath][index] = curr.message;
      } else {
        acc[curr.path] = curr.message;
      }
      return acc;
    };

    async function validateForm() {
      try {
        await addRecipeSchema.validate(formData, { abortEarly: false });
        setFormErrors({});

        return true;
      } catch (error) {
        const errors = error.inner.reduce(createObjErrorResipeForm, {});

        setFormErrors(errors);

        return false;
      }
    }
    validateForm();
  }, [formData, isShowErrors]);

  const onUpdateData = useCallback(
    (id, data) => {
      const changedData = selectedIngredients.map((el) => {
        if (el.id === id) {
          return { ...el, ...data };
        }
        return el;
      });

      setSelectedIngredients(changedData);
    },
    [selectedIngredients]
  );

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

    // const isValid = addRecipeSchema.isValidSync(formData);

    // if (!isValid) {
    //   toast.error("Please check the data");
    //   setIsShowErrors(true);
    //   return;
    // }

    const dataForSend = {
      image: fullImage,
      title: title.trim(),
      description: description.trim(),
      category,
      time: parseInt(time.replace("min", "").trim()),
      ingredients: selectedIngredients.map(({ amount, unit, title }) => ({
        id: title._id,
        measure: `${amount}${unit === "-" ? "" : ` ${unit}`}`,
      })),
      instructions,
    };

    dispatch(addRecipe(dataForSend));

    console.log(dataForSend);
    // console.log(selectedIngredients);

    resetDataForm();
    navigate("/my");
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <RecipeDescriptionFields
        allCategory={categories}
        image={{ fullImage, setFullImage }}
        name={{ title, setTitle }}
        descriptionData={{ description, setDescription }}
        categoryData={{ category, setCategory }}
        cokingTime={{ time, setTime }}
        formErrors={formErrors}
      />

      <RecipeIngridientsFields
        ingredients={selectedIngredients}
        setIngredients={setSelectedIngredients}
        onRemove={onDeleteIngredient}
        onUpdate={onUpdateData}
        allIngredients={ingredients}
        formErrors={formErrors}
      />

      <RecipePreparationFields
        value={instructions}
        onChange={setInstructions}
        formErrors={formErrors}
      />

      <Button type="submit">Add</Button>
    </Form>
  );
};

export default AddRecipeForm;
