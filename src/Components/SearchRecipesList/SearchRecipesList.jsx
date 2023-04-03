import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCategories } from "redux/categories/selectors";
import {
  RecipeImg,
  RecipeItem,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipesList,
} from "./SearchRecipesList.styled";
import defaultImg from "../../assets/images/defaultDish.png";

const SearchRecipesList = () => {
  const { recipeCategories } = useSelector(selectCategories);

  return (
    <div>
      <RecipesList>
        {recipeCategories.map(({ _id, title, area, thumb }) => (
          <RecipeItem key={_id}>
            <NavLink to={`/recipe/${_id}`}>
              <RecipeImg
                src={thumb ? thumb : defaultImg}
                alt={area}
                loading="lazy"
              />
              <RecipeTitleWrapper>
                <RecipeTitle>{title}</RecipeTitle>
              </RecipeTitleWrapper>
            </NavLink>
          </RecipeItem>
        ))}
      </RecipesList>
    </div>
  );
};

export default SearchRecipesList;
