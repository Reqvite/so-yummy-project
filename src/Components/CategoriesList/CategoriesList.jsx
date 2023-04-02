import { useEffect, useRef } from "react";
import { StyledCategory, StyledCategoryList } from "./CategoriesList.styled";

const CategoriesList = () => {
  const ref = useRef();

  const items = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

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
