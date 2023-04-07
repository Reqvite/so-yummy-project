import { NavLink } from "react-router-dom";
import {
  RecipeImg,
  RecipeItem,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipesList,
} from "./SearchRecipesList.styled";
import defaultImg from "../../assets/images/defaultDish.png";
import Alert from "Components/ui/Alert";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

const SearchRecipesList = ({ array, isLoading, error }) => {
  return (
    <div>
      {error && <Alert />}
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <RecipesList>
          {array.map(({ _id, title, area, thumb }) => (
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
      )}
    </div>
  );
};

export default SearchRecipesList;
