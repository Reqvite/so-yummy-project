import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useTheme } from "styled-components";
import Pagination from "@mui/material/Pagination";
import { Container } from "Components/Search/SearchPagination/SearchPagination.styled";
import { getCategoryRecipes } from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";

const CategoryPagination = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { categoryName } = useParams();
  const { categoryRecipesTotalCount, categoryRecipesCurrentPage } =
    useSelector(selectCategories);

  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(Number(categoryRecipesCurrentPage));
    setPagesQuantity(Math.ceil(Number(categoryRecipesTotalCount) / 8));
  }, [categoryRecipesTotalCount, categoryRecipesCurrentPage]);

  const handleChange = (_, num) => {
    const pageNumber = num;
    dispatch(getCategoryRecipes({ categoryName, page: pageNumber }));
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      {pagesQuantity > 1 && (
        <Pagination
          count={pagesQuantity}
          page={parseInt(page)}
          onChange={handleChange}
          size="small"
          sx={{
            ul: {
              background: theme.colors.elementsBackground,
              boxShadow: theme.shadows.paginationShadow,
              borderRadius: "26px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              paddingTop: "14px",
              paddingBottom: "14px",
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
export default CategoryPagination;
