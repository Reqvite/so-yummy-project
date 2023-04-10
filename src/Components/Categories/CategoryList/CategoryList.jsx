import Alert from "Components/ui/Alert";
import RecipesList from "Components/ui/RecipesList/RecipesList";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

const SearchRecipesList = ({ array, isLoading, error }) => {
  return (
    <div>
      {error && <Alert />}
      {isLoading ? <CategorySkeleton /> : <RecipesList array={array} />}
    </div>
  );
};

export default SearchRecipesList;
