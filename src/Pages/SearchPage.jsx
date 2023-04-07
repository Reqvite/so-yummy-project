// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getSearchResultByTitle } from "redux/categories/operations";
// import { selectCategories } from "redux/categories/selectors";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import SearchForm from "Components/ui/SearchForm/SearchForm";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

const SearchPage = () => {
  // const url = useLocation();
  // const dispatch = useDispatch();
  // const [list, setList] = useState([]);
  // let page = 1;

  // const key = getParamKey(url);
  // const value = getParamValue(url);
  // console.log(key, value);

  // if (key === "query" && value !== "" && list.length === 0) {
  //   dispatch(getSearchResultByTitle({ key, value, page }));
  // }

  // const { searchByTitle, searchByIngredient, isLoading, error } =
  //   useSelector(selectCategories);

  // useEffect(() => {
  //   if (key === "query" && value!=="") {
  //     const res = searchByTitle.results;
  //     setList(res);
  //   }
  //   if (key === "ingredient" && value!=="") {
  //     const res = searchByIngredient.recipes;
  //     setList(res);
  //   }
  // }, [key,value]);

  // console.log(list);

  return (
    <>
      <PageWrapper>
        <Title margBottom="50px">Search</Title>
        <SearchForm />
        <SelectSearch />
        {/* {list !== [] && (
          <SearchRecipesList array={list} isLoading={isLoading} error={error} />
        )} */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
