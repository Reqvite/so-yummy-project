import { Link, useLocation } from "react-router-dom";
import {
  BodyBox,
  BottomBox,
  Box,
  DescriptionFirst,
  Img,
  ListItem,
  MainBox,
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
                {pathname.includes("my") && (
                  <DeleteButton bgColor={theme.colors.deleteButtonBgFavorite} />
                )}
              </Box>
              <DescriptionFirst>{description}</DescriptionFirst>
              <BottomBox>
                <TextTime>{time} min</TextTime>
                <Link to={`/recipe/${_id}`}>
                  {pathname.includes("favorite") && isMobile ? (
                    <DeleteButton
                      bgColor={theme.colors.deleteButtonBgFavorite}
                    />
                  ) : (
                    <button>See more</button>
                  )}
                </Link>
              </BottomBox>
            </BodyBox>
          </ListItem>
        ))}
      </ul>
    </MainBox>
  );
};

export default ListWithPagination;
