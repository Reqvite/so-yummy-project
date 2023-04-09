import defaultImg from "../../assets/images/defaultDish.png";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
// import { RecipesList } from "./PreviewCategories.styled";

const PreviewCategories = ({ items }) => {
  const matchesMobile = useMediaQuery("(max-width:767.98px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );

  return (
    <div>
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
            <ul key={key}>
              <h2>{key}</h2>
              {itemsToRender.map(({ _id, title, preview }) => (
                <li key={_id}>
                  <img src={preview ? preview : defaultImg} alt="" />
                  <p> {title}</p>
                </li>
              ))}
              <NavLink to={`/categories/${key}`.toLowerCase()}>See all</NavLink>
            </ul>
          );
        }
        return filterItems;
      })()}
      <NavLink to={"/categories/beef"}>Other categories</NavLink>
    </div>
  );
};

export default PreviewCategories;
