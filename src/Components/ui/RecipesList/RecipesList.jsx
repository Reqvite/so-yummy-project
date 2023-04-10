import { NavLink } from "react-router-dom";
import {
  RecipeImg,
  RecipeItem,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipesListWrapper,
} from "./RecipesList.styled";
import defaultImg from "../../../assets/images/defaultDish.png";

const RecipesList = ({ array }) => {
  return (
    <RecipesListWrapper>
      {array.map(({ _id, title, thumb }) => (
        <RecipeItem key={_id}>
          <NavLink to={`/recipe/${_id}`}>
            <RecipeImg
              src={thumb ? thumb : defaultImg}
              alt={title}
              loading="lazy"
            />
            <RecipeTitleWrapper>
              <RecipeTitle>{title}</RecipeTitle>
            </RecipeTitleWrapper>
          </NavLink>
        </RecipeItem>
      ))}
    </RecipesListWrapper>
  );
};

export default RecipesList;
