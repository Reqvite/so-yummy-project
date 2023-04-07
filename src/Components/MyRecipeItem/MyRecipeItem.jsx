import { useLocation } from "react-router-dom";

import { RdButton } from "./roundBtn";
import { BtnDel } from "./ButtonDelete";

import {
  CardItem,
  ImgBox,
  Image,
  Info,
  Title,
  Description,
  Time,
  ButtonDelete,
  ButtonRecipe,
} from "./MyRecipeItem.styled";

const MyRecipeItem = ({
  description,
  preview,
  time,
  title,
  id,
  handelDelete,
  styleDel,
  styleBtn,
}) => {
  const location = useLocation();

  return (
    <CardItem>
      <ImgBox>
        <Image src={preview} alt={title} />
      </ImgBox>
      <Info>
        <Title>{title}</Title>
        <ButtonDelete onClick={ e => { handelDelete(id, e) }}>
          <BtnDel battonDel={styleDel} onClick={handelDelete} />
        </ButtonDelete>
        <Description>{description}</Description>
        <Time>{time} min</Time>
        <ButtonRecipe>
          <RdButton
            title="See recipe"
            to={`/recipe/${id}`}
            variant={styleBtn}
            statefrom={{ from: location }}
          />
        </ButtonRecipe>
      </Info>
    </CardItem>
  );
};

export default MyRecipeItem;
