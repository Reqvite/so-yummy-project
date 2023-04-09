import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  getUserFavouritesPaginationRecipes,
  getUserRecipesPagination,
} from "redux/recipes/operations";
import { useTheme } from "styled-components";

const Paginator = ({ currentPage, totalPages }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleChange = (e, value) => {
    if (pathname.includes("favorite")) {
      dispatch(getUserFavouritesPaginationRecipes(value));
    }
    if (pathname.includes("my")) {
      dispatch(getUserRecipesPagination(value));
    }
    window.scrollTo(0, 0);
  };

  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      size="small"
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
  );
};

export default Paginator;
