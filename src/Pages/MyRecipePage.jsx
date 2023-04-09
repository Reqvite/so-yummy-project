import ListWithPagination from "Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";
import styled from "styled-components";

const list = [
  {
    _id: "640cd5ac2dx9fecf12e8897fc",

    title: "Spaghetti Bolognese",
    description:
      "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    preview:
      "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
    time: "45",
  },
  {
    _id: "640cd5ac2dd9fecf123e8897fc",

    title: "Spaghetti Bolognese",
    description:
      "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    preview:
      "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
    time: "45",
  },
  {
    _id: "640cd5ac2ds9fecf12e8c897fc",

    title: "Spaghetti Bolognese",
    description:
      "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    preview:
      "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
    time: "45",
  },
];
const MyRecipePage = () => {
  return (
    <Box>
      <MainPageTitle title="My recipes" />
      <ListWithPagination list={list} />
    </Box>
  );
};

export default MyRecipePage;

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 343px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;
