import { Link, useLocation } from "react-router-dom";
import {
  BodyBox,
  BottomBox,
  Box,
  DescriptionFirst,
  Img,
  ListItem,
  MainBox,
  MainButton,
  TextTime,
  Title,
} from "./ListWithPagination.styled";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";

const ListWithPagination = ({ list }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <MainBox>
      <ul>
        {list.map(({ _id, title, description, preview, time }) => (
          <ListItem key={_id}>
            <Link to={`/recipe/${_id}`}>
              <Img alt="dish visually" src={preview} />
            </Link>
            <BodyBox>
              <Box>
                <Title>{title}</Title>
                {!isMobile && (
                  <DeleteButton
                    bgColor={
                      pathname.includes("favorite")
                        ? theme.colors.deleteButtonBgFavorite
                        : theme.colors.deleteButtonBgMyRecipes
                    }
                  />
                )}
              </Box>
              <DescriptionFirst>{description}</DescriptionFirst>
              <BottomBox>
                <TextTime>{time} min</TextTime>
                {pathname.includes("favorite") && isMobile ? (
                  <DeleteButton bgColor={theme.colors.deleteButtonBgFavorite} />
                ) : (
                  <MainButton
                    to={`/recipe/${_id}`}
                    $bgColor={
                      pathname.includes("my")
                        ? theme.colors.accentColor
                        : theme.colors.buttonBg
                    }
                    whileHover={{
                      backgroundColor: pathname.includes("my")
                        ? theme.colors.buttonBg
                        : theme.colors.accentColor,
                    }}
                  >
                    See more
                  </MainButton>
                )}
              </BottomBox>
            </BodyBox>
          </ListItem>
        ))}
      </ul>
    </MainBox>
  );
};

export default ListWithPagination;
