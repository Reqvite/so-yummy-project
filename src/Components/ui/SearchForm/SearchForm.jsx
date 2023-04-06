import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormContainer, FormInput, SearchBtn } from "./SearchForm.styled";
import { useTheme } from "styled-components";
import { getSearchResultByTitle } from "redux/categories/operations";

const SearchForm = ({ paramValue, param }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState(paramValue ? paramValue : "");
  const [type, setType] = useState(param ? param : "");

  useEffect(() => {
    if (value === "") {
      return;
    }
    if (paramValue) {
      navigate(`/search?${type}=${value}`);
    }
  }, [navigate, param, paramValue, type, value, dispatch]);

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

    navigate(`/search?${type}=${value}`);
    if (type === "query") {
      dispatch(getSearchResultByTitle({ type, value }));
    }
    // тут буде dispatch(запит пошуку по інгридієнту)
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
        <SearchBtn
          whileHover={{
            backgroundColor: theme.colors.mainText,
            color: theme.colors.elementsBackground,
          }}
        >
          Search
        </SearchBtn>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
