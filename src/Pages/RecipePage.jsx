import RecipeInngredientsList from "Components/Recipe/RecipeInngredientsList/RecipeInngredientsList";
import RecipePageHero from "Components/Recipe/RecipePageHero/RecipePageHero";
import RecipePreparation from "Components/Recipe/RecipePreparation/RecipePreparation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getIngredients } from "redux/ingredients/operations";
import { getRecipe, getUserFavouritesRecipes } from "redux/recipes/operations";
import { selectRecipe } from "redux/recipes/selectors";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    // area,
    // category,
    // createdAt,
    description,
    // favorites,
    ingredients,
    instructions,
    // likes,
    // popularity,
    preview,
    // tags,
    // thumb,
    time,
    title,
    // updatedAt,
    // youtube,
    _id,
  } = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(getRecipe(id));
    dispatch(getIngredients());
    dispatch(getUserFavouritesRecipes());
  }, [dispatch, id]);

  return (
    <>
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        id={_id}
      />
      <RecipeInngredientsList ingredients={ingredients} recipeId={_id} />
      <RecipePreparation
        preview={preview}
        title={title}
        instructions={instructions}
      />
    </>
  );
};

export default RecipePage;
