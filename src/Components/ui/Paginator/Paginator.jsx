import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavouritesRecipes } from "redux/recipes/operations";
import { selectPagination } from "redux/recipes/selectors";
import { useTheme } from "styled-components";

const Paginator = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { totalPages } = useSelector(selectPagination);

  const handleChange = (e, value) => {
    dispatch(getUserFavouritesRecipes(value));
    window.scrollTo(0, 0);
  };

  return (
    <Pagination
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
            background: theme.colors.inputSuccessColor,
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
