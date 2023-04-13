import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormWrapper, Form, FormInput, SearchBtn } from "./Search.styled";
import { toast } from "react-toastify";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue
      ? navigate(`/search?query=${searchValue}`)
      : toast.warning("Please enter the value");
  };
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          name="name"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </FormWrapper>
  );
};

export default Search;
