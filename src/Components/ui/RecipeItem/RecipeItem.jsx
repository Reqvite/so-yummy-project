import { Link, useLocation } from "react-router-dom";

import {
  CardItem,
  Title,
  Description,
  Time,
  Img,
  Box,
  MainButton,
  Info,
  BottomBox,
} from "./RecipeItem.styled";

import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/theme/selectors";
import DeleteButton from "../DeleteButton/DeleteButton";

const RecipeItem = ({ _id, description, preview, time, title }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:767px)");
  const themeSelect = useSelector(selectTheme);

  if (!title) return null;
  const newTitle = isMobile ? title?.substring(0, 20) + "..." : title;

  // const editedDescripiton = description.split(/[.?!]/);

  // if (editedDescripiton.length > 3) {
  //   description = `\n\n${description}`;
  // }
  // console.log(description);

  return (
    <CardItem key={_id}>
      <Link to={`/recipe/${_id}`}>
        <Img alt={title} src={preview} />
      </Link>
      <Info>
        <Box>
          <Title>{newTitle}</Title>
          {(!isMobile || pathname.includes("my")) && (
            <DeleteButton
              id={_id}
              bgColor={
                pathname.includes("favorite")
                  ? theme.colors.deleteButtonBgFavorite
                  : theme.colors.deleteButtonBgMyRecipes
              }
            />
          )}
        </Box>
        <Description>{description}</Description>
        <BottomBox>
          <Time>{time} min</Time>
          {pathname.includes("favorite") && isMobile ? (
            <DeleteButton
              id={_id}
              bgColor={theme.colors.deleteButtonBgFavorite}
            />
          ) : (
            <MainButton
              to={`/recipe/${_id}`}
              $bgColor={
                themeSelect === "dark"
                  ? theme.colors.accentColor
                  : pathname.includes("my")
                  ? theme.colors.accentColor
                  : theme.colors.buttonBg
              }
              whileHover={{
                backgroundColor:
                  themeSelect === "dark"
                    ? theme.colors.hoverButtondarkTheme
                    : pathname.includes("my")
                    ? theme.colors.buttonBg
                    : theme.colors.accentColor,
              }}
            >
              See more
            </MainButton>
          )}
        </BottomBox>
      </Info>
    </CardItem>
  );
};

export default RecipeItem;
