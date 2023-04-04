import RecipeInngredientsList from "Components/Recipe/RecipeInngredientsList/RecipeInngredientsList";
import RecipePageHero from "Components/Recipe/RecipePageHero/RecipePageHero";
import RecipePreparation from "Components/Recipe/RecipePreparation/RecipePreparation";
import RecipeSkeleton from "Components/ui/Skeletons/RecipeSkeleton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipe, getUserFavouritesRecipes } from "redux/recipes/operations";
import { selectRecipe, selectRecipeLoading } from "redux/recipes/selectors";
import { getShoppingIngredients } from "redux/shopping/operations";
import { selectIsLoading } from "redux/shopping/selectors";

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
    dispatch(getShoppingIngredients());
    dispatch(getRecipe(id));
    dispatch(getUserFavouritesRecipes());
  }, [dispatch, id]);

  const isLoading = useSelector(selectRecipeLoading);
  const isLoadingShopping = useSelector(selectIsLoading);

  return (
    <>
      {isLoadingShopping || isLoading ? (
        <RecipeSkeleton />
      ) : (
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
      )}
    </>
  );
};

export default RecipePage;
