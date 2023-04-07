import { useEffect, useState } from "react";
import MyRecipeItem from "../MyRecipeItem/MyRecipeItem";

import {deleteFavoriteRecipe} from "../../redux/recipes/operations";


import {
  selectRecipe,
  selectIsLoading,
  getUserFavouritesRecipes,
} from "redux/recipes/selectors";

import { Loader } from "../ui/Loader/Loader";

import { List, ListText, LoaderBox, } from "./FavoriteList.styled";
import { useDispatch, useSelector } from "react-redux";

const FavoriteList = () => {
  const isLoading = useSelector(selectIsLoading);
  const allRecipes = useSelector(selectRecipe);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const renderMovies = async () => {
      selectIsLoading(true);
      try {
        const data = await getUserFavouritesRecipes(page);
        selectRecipe(data);

        const totalCountPage = Math.ceil(data.total / 4);
        if (totalCountPage > 1) {
          setTotalPage(totalCountPage);
        }
      } catch (error) {
        console.log(error);
      } finally {
        selectIsLoading(false);
      }
    };
    renderMovies();
  }, [page]);

  const handelDelete = async id => {
    try {
      dispatch(deleteFavoriteRecipe(id));
      const data = await getUserFavouritesRecipes(page);
      selectRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <List>
      {isLoading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes.length !== 0 && !isLoading ? (
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            handelDelete={handelDelete}
            styleDel="black"
            styleBtn="normal"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
      {totalPage && (
        <div change={handleChange}>Paginator</div>
      )}
    </List>
  );
};

export default FavoriteList;
