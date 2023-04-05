import { useLocation } from "react-router-dom";

import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

const SearchPage = () => {
  const url = useLocation();

  const getParameterType = () => {
    const searchParams = new URLSearchParams(url.search);
    for (const key of searchParams.keys()) {
      return key;
    }
  };
  const getParamValue = () => {
    const paramValue = getParameterType();
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get(paramValue);
  };

  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchForm param={getParameterType()} paramValue={getParamValue()} />
        <SelectSearch param={getParameterType()} />

        {/* <SearchRecipesList query="" /> */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
