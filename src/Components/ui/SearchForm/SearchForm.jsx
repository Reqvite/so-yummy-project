import { theme } from "theme/theme";
import { Form, FormContainer, FormInput, SearchBtn } from "./SearchForm.styled";

const SearchForm = () => {
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
