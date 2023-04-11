import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import {
  Box,
  Button,
  ClockSvg,
  ImgBox,
  MainPageTitle,
  Text,
  Time,
} from "./RecipePageHero.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteRecipe,
  deleteFavoriteRecipe,
} from "redux/recipes/operations";
import {
  selectIsLoading,
  selectUserFavouritesRecipes,
} from "redux/recipes/selectors";
import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";

const RecipePageHero = ({ title, description, time, id }) => {
  const userFavouritesRecipes = useSelector(selectUserFavouritesRecipes);
  const [first, setFirst] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isLoading = useSelector(selectIsLoading);

  const topRef = useRef();

  useEffect(() => {
    if (!first) {
      setIsFavorite(userFavouritesRecipes.some((recipe) => recipe._id === id));
      setFirst(true);
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userFavouritesRecipes, id, first]);

  const handleFavoriteButton = (id) => {
    if (isFavorite) {
      dispatch(deleteFavoriteRecipe(id));
    } else {
      dispatch(addFavoriteRecipe(id));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <ImgBox />
      <MainPageTitle $isBig={title?.split(" ").length > 6} ref={topRef}>
        {title}
      </MainPageTitle>
      <Text $isBig={title?.split(" ").length > 6}>{description}</Text>
      <Button
        disabled={isLoading}
        whileHover={{
          backgroundColor: theme.colors.accentColor,
          borderColor: theme.colors.accentColor,
        }}
        onClick={() => handleFavoriteButton(id)}
      >
        {isLoading ? (
          <ButtonLoader color="white" width={25} />
        ) : isFavorite ? (
          "Remove to favorite recipes"
        ) : (
          "Add to favorite recipes"
        )}
      </Button>
      <Box>
        <ClockSvg />
        <Time>{time} min</Time>
      </Box>
    </>
  );
};

export default RecipePageHero;
