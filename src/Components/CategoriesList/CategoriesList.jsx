import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoryRecipes } from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";
import { StyledCategory, StyledCategoryList } from "./CategoriesList.styled";
import { useParams } from "react-router-dom";

const CategoriesList = () => {
  const ref = useRef();
  const { items, recipeCategories } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCategoryRecipes(categoryName));
  }, [dispatch, categoryName]);

  console.log(recipeCategories);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <StyledCategoryList ref={ref}>
      {items.map((item, i) => (
        <StyledCategory key={i}>
          <p>{item}</p>
        </StyledCategory>
      ))}
    </StyledCategoryList>
  );
};

export default CategoriesList;
