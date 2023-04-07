import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, FormInput, SearchBtn } from "./Search.styled";
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
    <div>
      <Form onSubmit={handleSubmit}>
        <FormInput
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          name="name"
          placeholder="Beef"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </div>
  );
};

export default Search;
