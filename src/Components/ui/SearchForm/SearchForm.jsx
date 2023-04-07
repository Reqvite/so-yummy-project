import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormInput, SearchBtn } from "./SearchForm.styled";
import Alert from "../Alert";

const SearchForm = ({ paramValue, param }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(paramValue ? paramValue : "");
  const [type, setType] = useState("query");

  useEffect(() => {
    if (param === "ingredient" && paramValue !== "") {
      setType(param);
      setValue(paramValue);
    }
    if (param === "query" && paramValue !== "") {
      setType(param);
      setValue(paramValue);
    }
  }, [param, paramValue]);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return <Alert />;
    }

    if (value !== "") {
      if (type === "query") {
        navigate(`/search?query=${value}`);
      } else {
        navigate(`/search?ingredient=${value}`);
      }
    }
  };

  return (
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
  );
};

export default SearchForm;
