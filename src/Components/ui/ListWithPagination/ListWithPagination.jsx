import { Link } from "react-router-dom";
import {
  BottomBox,
  Box,
  DishDescriptionFirst,
  Img,
  ListItem,
  TextTime,
  Title,
  TopBox,
  TrashBox,
} from "./ListWithPagination.styled";

const ListWithPagination = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map(({ _id, title, description, preview, time }) => (
          <ListItem key={_id}>
            <Link to={`/recipe/${_id}`}>
              <Img alt="dish visually" src={preview} />
            </Link>
            <TopBox>
              <Box>
                <Title>{title}</Title>
                <TrashBox>delete</TrashBox>
              </Box>
              <DishDescriptionFirst>{description}</DishDescriptionFirst>
              <BottomBox>
                <TextTime>{time}</TextTime>
                <Link to={`/recipe/${_id}`}>
                  <button>See more</button>
                </Link>
              </BottomBox>
            </TopBox>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default ListWithPagination;
