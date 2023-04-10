import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "styled-components";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { selectCategories } from "redux/categories/selectors";
import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { Container } from "./SearchPagination.styled";

const SearchPagination = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
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
    if (searchParams.get("query")) {
      const type = "query";
      const value = searchParams.get("query");
      const page = Number(num);
      dispatch(getSearchResultByTitle({ type, value, page }));
      setSearchParams({ query: searchParams.get("query") });
      window.scrollTo(0, 0);
    }
    if (searchParams.get("ingredient")) {
      const type = "ingredient";
      const value = searchParams.get("ingredient");
      const page = Number(num);
      dispatch(getSearchResultByIngredient({ type, value, page }));
      setSearchParams({ ingredient: searchParams.get("ingredient") });
      window.scrollTo(0, 0);
    }
  };

  return (
    <Container>
      {pagesQuantity > 0 && (
        <Stack spacing={2}>
          <Pagination
            count={pagesQuantity}
            page={page}
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
        </Stack>
      )}
    </Container>
  );
};
export default SearchPagination;
