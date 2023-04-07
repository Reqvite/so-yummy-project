import ListWithPagination from "Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";

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
    <>
      <MainPageTitle title="My recipes" />
      <ListWithPagination list={list} />
    </>
  );
};

export default MyRecipePage;
