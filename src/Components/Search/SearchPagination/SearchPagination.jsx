import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";

import Pagination from "@mui/material/Pagination";
import { selectCategories } from "redux/categories/selectors";
import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { Container } from "./SearchPagination.styled";

const SearchPagination = ({ query, ingredient, limit }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {
    searchByTitleTotalRes,
    searchByIngredientTotalRes,
    searchByTitle,
    searchByIngredient,
    currentPageTitle,
    currentPageIngredient,
  } = useSelector(selectCategories);

  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchByTitle.length === 0 && searchByIngredient.length === 0) {
      return;
    }
    if (searchByTitle.length > 0) {
      setPagesQuantity(Math.ceil(searchByTitleTotalRes / 6));
      setPage(currentPageTitle);
    }
    if (searchByIngredient.length > 0) {
      setPagesQuantity(Math.ceil(searchByIngredientTotalRes / 6));
      setPage(currentPageIngredient);
    }
  }, [
    searchByTitle,
    searchByIngredient,
    currentPageIngredient,
    currentPageTitle,
    searchByIngredientTotalRes,
    searchByTitleTotalRes,
  ]);

  const handleChange = (_, num) => {
    const pageNumber = num;
    const limitItems = limit;
    if (query) {
      const type = "query";
      const value = query;
      dispatch(
        getSearchResultByTitle({
          type,
          value,
          page: pageNumber,
          limit: limitItems,
        })
      );
      window.scrollTo(0, 0);
    }
    if (ingredient) {
      const type = "ingredient";
      const value = ingredient;
      dispatch(
        getSearchResultByIngredient({
          type,
          value,
          page: pageNumber,
          limit: limitItems,
        })
      );
      window.scrollTo(0, 0);
    }
  };

  return (
    <Container>
      {pagesQuantity > 0 && (
        <Pagination
          count={pagesQuantity}
          page={parseInt(page)}
          onChange={handleChange}
          sx={{
            ul: {
              background: theme.colors.elementsBackground,
              boxShadow: theme.shadows.paginationShadow,
              borderRadius: "26px",
              width: "275px",
              height: "51px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            },
            "ul>li .Mui-selected": {
              background: theme.colors.paginationActive,

              "&:hover": {
                background: theme.colors.hoverPaginator,
              },
            },
            "ul>li .MuiPaginationItem-text": {
              color: theme.colors.mainText,
            },
          }}
        />
      )}
    </Container>
  );
};
export default SearchPagination;
