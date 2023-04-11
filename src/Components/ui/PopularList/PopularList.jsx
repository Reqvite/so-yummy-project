import { useDispatch, useSelector } from "react-redux";
import {
  BoxTitle,
  Description,
  ImgBox,
  Item,
  ItemLink,
  ItemTitle,
  List,
  TextBox,
  PopularRecipesWrap,
} from "./PopularList.styled";
import { useEffect } from "react";
import { getPopularRecipes } from "redux/recipes/operations";
import {
  selectPopularIsLoading,
  selectPopularRecipes,
} from "redux/recipes/selectors";
import PopularRecipesSkeleton from "../Skeletons/PopularRecipesSkeleton";

const PopularList = () => {
  const dispatch = useDispatch();
  const popularList = useSelector(selectPopularRecipes);
  const isLoading = useSelector(selectPopularIsLoading);

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  return (
    <PopularRecipesWrap>
      {isLoading ? (
        <PopularRecipesSkeleton />
      ) : (
        <div>
          <BoxTitle>Popular recipe</BoxTitle>
          <List>
            {popularList.map(({ _id, title, preview, description }) => (
              <Item key={_id}>
                <ItemLink to={`/recipe/${_id}`}>
                  <ImgBox>
                    <img src={preview} alt={title} />
                  </ImgBox>
                  <TextBox>
                    <ItemTitle>
                      {title.length > 30 ? title.slice(0, 35) + "..." : title}
                    </ItemTitle>
                    <Description>{description.slice(0, 80)}...</Description>
                  </TextBox>
                </ItemLink>
              </Item>
            ))}
          </List>
        </div>
      )}
    </PopularRecipesWrap>
  );
};

export default PopularList;
