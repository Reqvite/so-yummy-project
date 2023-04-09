// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import SearchedRecipesList from "Components/SearchedRecipesList/SearchedRecipesList";

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
        {/* {result.length > 0 && ( */}
        <SearchedRecipesList
        // result={result}
        // isLoading={isLoading}
        // error={error}
        />
        {/* )} */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
