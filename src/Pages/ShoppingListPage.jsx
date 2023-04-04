import IngredientsShoppingList from "Components/IngredientsShoppingList/IngredientsShoppingList";
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
