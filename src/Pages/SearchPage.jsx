import { useLocation } from "react-router-dom";

import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

const SearchPage = () => {
  const url = useLocation();

  const getParameterType = () => {
    const searchParams = url.search;
    const param = searchParams.replace("?", "");
    return param;
  };

  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchForm />
        <SelectSearch param={getParameterType()} />

        {/* <SearchRecipesList query="" /> */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
