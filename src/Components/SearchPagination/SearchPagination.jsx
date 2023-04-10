import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { selectCategories } from "redux/categories/selectors";
import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";

const Container = styled.div`
  ${(p) => p.theme.flexCentered};
  margin-top: 40px;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 50px;
  }

  ${(p) => p.theme.sizes.desktop} {
    display: none;
  }
`;

const SearchPagination = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
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
    }
    if (searchParams.get("ingredient")) {
      const type = "ingredient";
      const value = searchParams.get("ingredient");
      const page = Number(num);
      dispatch(getSearchResultByIngredient({ type, value, page }));
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
          />
        </Stack>
      )}
    </Container>
  );
};
export default SearchPagination;
