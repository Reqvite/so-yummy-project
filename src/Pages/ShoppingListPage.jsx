import IngredientsShoppingList from "Components/Shopping/IngredientsShoppingList/IngredientsShoppingList";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";

const ShoppingListPage = () => {
  return (
    <>
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList />
    </>
  );
};

export default ShoppingListPage;
