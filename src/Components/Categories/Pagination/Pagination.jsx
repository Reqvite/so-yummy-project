import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import Pagination from "@mui/material/Pagination";

const Pagination = () => {
  return (
    <Container>
      {pagesQuantity > 1 && (
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
export default Pagination;
