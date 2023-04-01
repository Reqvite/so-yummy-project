import { Container } from "@mui/material";
import IngredientsShoppingList from "Components/IngredientsShoppingList/IngredientsShoppingList";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";

const ShoppingListPage = () => {
  return (
    <Container>
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList />
    </Container>
  );
};

export default ShoppingListPage;
