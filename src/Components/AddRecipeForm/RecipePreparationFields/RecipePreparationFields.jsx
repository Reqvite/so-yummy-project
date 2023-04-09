import {
  Wrap,
  Title,
  Textarea,
  ErrorText,
} from "../RecipePreparationFields/RecipePreparationFields.styled";

const RecipePreparationFields = ({ value, onChange, formErrors }) => {
  return (
    <Wrap>
      <Title>Recipe Preparation</Title>
      <Textarea
        name="recipe"
        placeholder="Enter recipe"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {formErrors?.instructions && (
        <ErrorText>{formErrors?.instructions}</ErrorText>
      )}
    </Wrap>
  );
};

export default RecipePreparationFields;
