import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

import SearchForm from "Components/ui/SearchForm/SearchForm";

const SearchPage = () => {
  const getParameterType = () => {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const searchParams = parsedUrl.searchParams;
    const param = [...searchParams.keys()].join();
    return param;
  };

  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchForm />
        <SelectSearch param={getParameterType} />

        {/* <SearchRecipesList query="" /> */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
