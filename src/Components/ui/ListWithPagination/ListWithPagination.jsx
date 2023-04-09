import { List, MainBox, PaginatorBox } from "./ListWithPagination.styled";
import { useSelector } from "react-redux";
import EmptyErrorBox from "../EmptyErrorBox/EmptyErrorBox";
import { selectIsLoading } from "redux/recipes/selectors";
import FavoriteRecipeSkeleton from "../Skeletons/FavoriteRecipeSkeleton";
import RecipeItem from "../RecipeItem/RecipeItem";
import Paginator from "../Paginator/Paginator";

const ListWithPagination = ({ list, isLoading, totalPages }) => {
  const isLoadingOperation = useSelector(selectIsLoading);

  const shouldRenderEmptyBox =
    !isLoading && !isLoadingOperation && list.length === 0;
  return (
    <MainBox>
      <List>
        {isLoading || isLoadingOperation ? (
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
      {shouldRenderEmptyBox && (
        <EmptyErrorBox text="You don't add any recipe yet." />
      )}
      {!isLoading && !isLoadingOperation && totalPages > 1 && (
        <PaginatorBox>
          <Paginator list={list} />
        </PaginatorBox>
      )}
    </MainBox>
  );
};

export default ListWithPagination;
