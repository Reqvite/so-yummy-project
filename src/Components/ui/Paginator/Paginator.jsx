import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavouritesPaginationRecipes } from "redux/recipes/operations";
import { selectPagination } from "redux/recipes/selectors";
import { useTheme } from "styled-components";

const Paginator = ({ list }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector(selectPagination);

  const handleChange = (e, value) => {
    dispatch(getUserFavouritesPaginationRecipes(value));
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