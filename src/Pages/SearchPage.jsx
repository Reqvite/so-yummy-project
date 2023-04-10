import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import SearchedRecipesList from "Components/SearchedRecipesList/SearchedRecipesList";
import SearchPagination from "Components/SearchPagination/SearchPagination";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import { SearchBar } from "Components/ui/SearchForm/SearchForm.styled";

const SearchPage = () => {
  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchBar>
          <SearchForm />
          <SelectSearch />
        </SearchBar>
        <SearchedRecipesList />
      </PageWrapper>
    </>
  );
};

export default SearchPage;
