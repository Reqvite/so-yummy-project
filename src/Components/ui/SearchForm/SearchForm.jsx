import { Form, FormContainer, FormInput, SearchBtn } from "./SearchForm.styled";
import { useTheme } from "styled-components";

const SearchForm = () => {
  const theme = useTheme();
  return (
    <FormContainer>
      <Form>
        <FormInput placeholder="Search query" />
      </Form>
      <SearchBtn
        whileHover={{
          backgroundColor: theme.colors.mainText,
          color: theme.colors.elementsBackground,
        }}
      >
        Search
      </SearchBtn>
    </FormContainer>
  );
};

export default SearchForm;
