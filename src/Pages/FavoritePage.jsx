import ListWithPagination from "Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavouritesRecipes } from "redux/recipes/operations";
import { selectUserFavouritesRecipes } from "redux/recipes/selectors";

const list = [
  {
    _id: "640cd5ac2d9fecf12e8897fc",

    title: "Spaghetti Bolognese",
    description:
      "An Italian An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs. pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    preview:
      "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
    time: "45",
  },
  {
    _id: "640cd5ac2dd9fecf12e8897fc",

    title: "Spaghetti Bolognese",
    description:
      "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    preview:
      "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
    time: "45",
  },
  {
    _id: "640cd5ac2ds9fecf12e8897fc",

    title: "Spaghetti Bolognese",
    description:
      "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    preview:
      "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
    time: "45",
  },
];
const FavoritePage = () => {
  const dispatch = useDispatch();
  const userFavoriteList = useSelector(selectUserFavouritesRecipes);

  useEffect(() => {
    dispatch(getUserFavouritesRecipes());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title="Favorites" />
      <ListWithPagination list={list} />
    </>
  );
};

export default FavoritePage;
