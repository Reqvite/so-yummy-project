import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Tab } from "@mui/material";

import { selectCategories } from "redux/categories/selectors";
import { StyledCategory, StyledCategoryList } from "./CategoriesList.styled";
import Alert from "Components/ui/Alert";

const CategoriesList = () => {
  const { items, error } = useSelector(selectCategories);
  const [value, setValue] = useState(0);
  const { categoryName } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const categoryIndex = items.findIndex(
      (item) => item.toLowerCase() === categoryName
    );
    setValue(categoryIndex !== -1 ? categoryIndex : 0);
  }, [categoryName, items]);

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
    const newCategoryName = items[newValue];
    navigate(`/categories/${newCategoryName.toLowerCase()}`);
  };

  return (
    <StyledCategoryList>
      {error && <Alert />}
      <StyledCategory
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        TabIndicatorProps={{ sx: { backgroundColor: "#8BAA36", height: 2 } }}
        aria-label="scrollable prevent tabs example"
        sx={{
          "& button": {
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "15px",
            paddingBottom: "15px",
            textTransform: "capitalize",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: 400,
          },
          "& button.Mui-selected": {
            color: "#8BAA36",
          },
        }}
      >
        {items.map((item, i) => (
          <Tab
            key={i}
            label={item}
            className={value === i ? "Mui-selected" : ""}
          ></Tab>
        ))}
      </StyledCategory>
    </StyledCategoryList>
  );
};

export default CategoriesList;
