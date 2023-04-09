import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Form, FormInput, SearchBtn } from "./SearchForm.styled";
import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { toast } from "react-toastify";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [currentInputValue, setCurrentInputValue] = useState();

  useEffect(() => {
    if (
      searchParams.get("ingredient") === null &&
      searchParams.get("query") !== undefined
    ) {
      setCurrentInputValue(searchParams.get("query"));
    }
    if (
      searchParams.get("ingredient") !== undefined &&
      searchParams.get("query") === null
    ) {
      setCurrentInputValue(searchParams.get("ingredient"));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setCurrentInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target[0].value);
    console.log(searchParams.get("query"));
    if (
      searchParams.get("query") === null &&
      searchParams.get("ingredient") !== undefined
    ) {
      // setCurrentInputValue(searchParams.get("ingredient"));
      setSearchParams({ ingredient: e.target[0].value.toLowerCase() });
    }
    if (
      searchParams.get("ingredient") === null &&
      searchParams.get("query") !== undefined
    ) {
      // setCurrentInputValue(searchParams.get("query"));
      setSearchParams({ query: e.target[0].value.toLowerCase() });
    }
    if (
      searchParams.get("ingredient") === undefined &&
      searchParams.get("query") === undefined
    ) {
      toast.warning("Please enter the value");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        value={currentInputValue}
        type="text"
        name="searchValue"
        placeholder="Search query"
        onChange={handleChange}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </Form>
  );
};

export default SearchForm;
