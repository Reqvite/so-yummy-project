import defaultImg from "../../../assets/images/defaultDish.png";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {
  RecipesList,
  RecipeItem,
  RecipeImg,
  RecipeTitleWrapper,
  RecipeTitle,
  Title,
  Link,
  WrapperLink,
  Nav,
  CategoriesWrapper,
} from "./PreviewCategories.styled";

const PreviewCategories = ({ items }) => {
  const matchesMobile = useMediaQuery("(max-width:767.98px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );

  return (
    <section>
      {(() => {
        let filterItems = [];
        for (let key in items) {
          let itemsToRender = items[key];
          if (matchesMobile) {
            itemsToRender = itemsToRender.slice(0, 1);
          } else if (matchesTablet) {
            itemsToRender = itemsToRender.slice(0, 2);
          }

          filterItems.push(
            <CategoriesWrapper key={key}>
              <Title>{key}</Title>
              <RecipesList>
                {itemsToRender.map(({ _id, title, preview }) => (
                  <RecipeItem key={_id}>
                    <NavLink to={`/recipe/${_id}`}>
                      <RecipeImg src={preview ? preview : defaultImg} alt="" />
                      <RecipeTitleWrapper>
                        <RecipeTitle>{title}</RecipeTitle>
                      </RecipeTitleWrapper>
                    </NavLink>
                  </RecipeItem>
                ))}
              </RecipesList>
              <WrapperLink>
                <Link to={`/categories/${key}`.toLowerCase()}>See all</Link>
              </WrapperLink>
            </CategoriesWrapper>
          );
        }
        return filterItems;
      })()}
      <Nav to={"/categories/beef"}>Other categories</Nav>
    </section>
  );
};

export default PreviewCategories;
