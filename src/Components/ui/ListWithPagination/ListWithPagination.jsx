import { List, MainBox, PaginatorBox } from "./ListWithPagination.styled";
import EmptyErrorBox from "../EmptyErrorBox/EmptyErrorBox";
import FavoriteRecipeSkeleton from "../Skeletons/FavoriteRecipeSkeleton";
import RecipeItem from "../RecipeItem/RecipeItem";
import Paginator from "../Paginator/Paginator";
import { useEffect, useRef } from "react";

const ListWithPagination = ({
  list,
  isLoading,
  currentPage,
  totalPages,
  isLoadingOperation,
}) => {
  const shouldRenderEmptyBox =
    !isLoading && !isLoadingOperation && list.length === 0;

  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  return (
    <MainBox>
      <List ref={topRef}>
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
          <Paginator
            list={list}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </PaginatorBox>
      )}
    </MainBox>
  );
};

export default ListWithPagination;
