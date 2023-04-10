import SelectSearch from "Components/Search/SelectSearch/SelectSearch";
import SearchForm from "Components/Search/SearchForm/SearchForm";
import SearchedRecipesList from "Components/Search/SearchedRecipesList/SearchedRecipesList";
import { PageWrapper } from "Components/Categories/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import { SearchBar } from "Components/Search/SearchForm/SearchForm.styled";

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
