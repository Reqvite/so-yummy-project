import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormContainer, FormInput, SearchBtn } from "./SearchForm.styled";
import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";

const SearchForm = ({ paramValue, param }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState(paramValue ? paramValue : "");
  const [type, setType] = useState("query");
  let page = 1;

  useEffect(() => {
    if (param === "ingredient") {
      setType(param);
    }
    setType(param);
  }, [param]);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      console.log("error");
      return;
    }
    console.log(type);
    console.log(value);

    if (value !== "") {
      if (param === "query") {
        navigate(`/search?query=${value}`);
        dispatch(getSearchResultByTitle({ type, value, page }));
      } else {
        navigate(`/search?ingredient=${value}`);
        dispatch(getSearchResultByIngredient({ type, value, page }));
      }
    }
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="searchValue"
          value={value}
          placeholder="Search query"
          onChange={handleChange}
        />
        <SearchBtn>Search</SearchBtn>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
