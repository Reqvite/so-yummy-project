import { useLocation } from "react-router-dom";

import { getParamKey } from "helpers/getUrlParam";
import { getParamValue } from "helpers/getUrlParamValue";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

const SearchPage = () => {
  const url = useLocation();

  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchForm param={getParamKey(url)} paramValue={getParamValue(url)} />
        <SelectSearch param={getParamKey(url)} />

        {/* <SearchRecipesList query="" /> */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
