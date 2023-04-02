import PageContainer from "Components/common/PageContainer/PageContainer";
import IngredientsShoppingList from "Components/IngredientsShoppingList/IngredientsShoppingList";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";
import { NavLink } from "react-router-dom";

const ShoppingListPage = () => {
  return (
    <PageContainer>
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList />
    </PageContainer>
  );
};

export default ShoppingListPage;
