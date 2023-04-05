import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormContainer, FormInput, SearchBtn } from "./SearchForm.styled";
import { useTheme } from "styled-components";

const SearchForm = ({ paramValue, param }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(paramValue ? paramValue : "");

  useEffect(() => {
    if (value === "") {
      return;
    }
    if (paramValue) {
      navigate(`/search?${param}=${paramValue}`);
    }
  }, [navigate, param, paramValue, value]);

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

    navigate(`/search?${param}=${value}`);
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
