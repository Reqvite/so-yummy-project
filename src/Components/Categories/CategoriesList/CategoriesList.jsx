import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCategories } from "redux/categories/selectors";
import { StyledCategory, StyledCategoryList } from "./CategoriesList.styled";
import Alert from "Components/ui/Alert";
import { useTheme } from "styled-components";

const CategoriesList = () => {
  const { items, error } = useSelector(selectCategories);
  const [value, setValue] = useState(0);
  const { categoryName } = useParams();
  const theme = useTheme();
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

  const isDesktop = useMediaQuery("(min-width: 1439.9px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );
  const isMobile = useMediaQuery(
    "(min-width: 375px) and (max-width: 767.98px)"
  );

  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <StyledCategoryList>
      {error && <Alert />}
      <StyledCategory
        ref={topRef}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        TabIndicatorProps={{ sx: { backgroundColor: "#8BAA36", height: 2 } }}
        aria-label="scrollable prevent tabs example"
        sx={{
          "& button": {
            paddingLeft: isMobile
              ? "12px"
              : isTablet
              ? "27px"
              : isDesktop
              ? "27px"
              : "12px",
            paddingRight: isMobile
              ? "12px"
              : isTablet
              ? "27px"
              : isDesktop
              ? "27px"
              : "12px",
            paddingTop: "15px",
            paddingBottom: "15px",
            textTransform: "capitalize",
            fontSize: isMobile ? 14 : isTablet ? 18 : isDesktop ? 18 : 14,
            fontFamily: "Poppins",
            fontWeight: 400,
            color: theme.colors.categoryTabTextColor,
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
