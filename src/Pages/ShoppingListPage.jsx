import PageContainer from "Components/common/PageContainer/PageContainer";
import IngredientsShoppingList from "Components/IngredientsShoppingList/IngredientsShoppingList";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";

const ShoppingListPage = () => {
  return (
    <PageContainer>
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList />
    </PageContainer>
  );
};

export default ShoppingListPage;
