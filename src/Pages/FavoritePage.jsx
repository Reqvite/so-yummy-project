import FavoriteList from 'components/FavoriteList/FavoriteList';
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import { Page } from '../Components/FavoriteList/FavoritePage.styled';

const FavoritePage = () => (
  <Page>
    <Title text="Favorite" />
    <FavoriteList />
  </Page>
);

export default FavoritePage;
