import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import { Page } from '../Components/FavoriteList/FavoritePage.styled';

const MyRecipesPage = () => (
  <Page>
    <Title text="My recipes" />
    <MyRecipesList />
  </Page>
);

export default MyRecipesPage;
