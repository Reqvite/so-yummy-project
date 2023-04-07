import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { getParamKey } from "helpers/getUrlParam";
import { getParamValue } from "helpers/getUrlParamValue";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import SearchedRecipesList from "Components/SearcedRecipesList/SearchedRecipesList";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";

const SearchBar = styled.div`
  ${(p) => p.theme.flexCentered};
  flex-direction: column;
  margin-top: ${(p) => p.margTop || null};
`;

const SearchPage = () => {
  const url = useLocation();

  const key = getParamKey(url);
  const value = getParamValue(url);
  console.log(key, value);

  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchBar>
          <SearchForm param={key} paramValue={value} />
          <SelectSearch param={key} />
          <SearchedRecipesList param={key} paramValue={value} />
        </SearchBar>
      </PageWrapper>
    </>
  );
};

export default SearchPage;
