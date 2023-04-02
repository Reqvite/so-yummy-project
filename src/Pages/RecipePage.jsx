import { Container } from "@mui/system";
import RecipeInngredientsList from "Components/Recipe/RecipeInngredientsList/RecipeInngredientsList";

import RecipePageHero from "Components/Recipe/RecipePageHero/RecipePageHero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipe } from "redux/recipes/operations";
import { selectRecipe } from "redux/recipes/selectors";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    area,
    category,
    createdAt,
    description,
    favorites,
    ingredients,
    instructions,
    likes,
    popularity,
    preview,
    tags,
    thumb,
    time,
    title,
    updatedAt,
    youtube,
    _id,
  } = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch, id]);

  return (
    <Container>
      <RecipePageHero title={title} description={description} time={time} />
      <RecipeInngredientsList ingredients={ingredients} recipeId={_id} />
    </Container>
  );
};

export default RecipePage;
