import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Form, FormContainer, FormInput, SearchBtn } from "./SearchForm.styled";
import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [currentInputValue, setCurrentInputValue] = useState();

  useEffect(() => {
    if (searchParams.get("query") === null) {
      setCurrentInputValue(searchParams.get("ingredient"));
    } else {
      setCurrentInputValue(searchParams.get("query"));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    if (searchParams.get("query") === null) {
      setSearchParams({ ingredient: e.target.value });
    } else {
      setSearchParams({ query: e.target.value });
    }
    setCurrentInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.get("query") === null) {
      const type = "ingredient";
      const value = searchParams.get("ingredient");
      const page = 1;
      console.log(type);
      console.log(value);
      console.log(page);
      dispatch(getSearchResultByIngredient({ type, value, page }));
    } else {
      const type = "query";
      const value = searchParams.get("query");
      const page = 1;
      dispatch(getSearchResultByTitle({ type, value, page }));
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Form>
        <FormInput
          value={currentInputValue}
          type="text"
          name="searchValue"
          placeholder="Search query"
          onChange={handleChange}
        />
        <SearchBtn>Search</SearchBtn>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
