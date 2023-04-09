import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, FormInput, SearchBtn } from "./SearchForm.styled";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentInputValue, setCurrentInputValue] = useState("");

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
    setCurrentInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      searchParams.get("query") === null &&
      searchParams.get("ingredient") !== undefined
    ) {
      setSearchParams({ ingredient: e.target[0].value.toLowerCase() });
    }
    if (
      searchParams.get("ingredient") === null &&
      searchParams.get("query") !== undefined
    ) {
      setSearchParams({ query: e.target[0].value.toLowerCase() });
    }
    if (e.target[0].value === "") {
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
