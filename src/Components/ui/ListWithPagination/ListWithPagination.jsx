import { List, MainBox } from "./ListWithPagination.styled";
import { useSelector } from "react-redux";
import EmptyErrorBox from "../EmptyErrorBox/EmptyErrorBox";
import { selectUserFavoritesIsLoading } from "redux/recipes/selectors";
import FavoriteRecipeSkeleton from "../Skeletons/FavoriteRecipeSkeleton";
import RecipeItem from "../RecipeItem/RecipeItem";

const ListWithPagination = ({ list }) => {
  const isLoading = useSelector(selectUserFavoritesIsLoading);

  return (
    <MainBox>
      <List>
        {isLoading ? (
          <FavoriteRecipeSkeleton />
        ) : (
          <>
            {list.map(({ _id, title, description, preview, time }) => (
              <RecipeItem
                key={_id}
                description={description}
                preview={preview}
                time={time}
                title={title}
                _id={_id}
              />
            ))}
          </>
        )}
      </List>
      {!isLoading && list.length === 0 && (
        <EmptyErrorBox text="You don't add any recipe yet." />
      )}
      <div>Paginator</div>
    </MainBox>
  );
};

export default ListWithPagination;