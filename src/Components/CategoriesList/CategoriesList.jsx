import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tab } from "@mui/material";

import { getCategories, getCategoryRecipes } from "redux/categories/operations";

import { selectCategories } from "redux/categories/selectors";
import { StyledCategory, StyledCategoryList } from "./CategoriesList.styled";
import { useParams } from "react-router-dom";

const CategoriesList = () => {
  const { items, recipeCategories } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCategoryRecipes(categoryName));
  }, [dispatch, categoryName]);

  console.log(recipeCategories);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledCategoryList>
      <StyledCategory
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        TabIndicatorProps={{ sx: { backgroundColor: "#8BAA36", height: 2 } }}
        aria-label="scrollable prevent tabs example"
        sx={{
          "& button": {
            textTransform: "capitalize",
            fontFamily: "Poppins",
            fontWeight: 400,
          },
          "& button.Mui-selected": {
            color: "#8BAA36",
          },
        }}
      >
        {items.map((item, i) => (
          <Tab key={i} label={item}></Tab>
        ))}
      </StyledCategory>
    </StyledCategoryList>
  );
};

export default CategoriesList;
