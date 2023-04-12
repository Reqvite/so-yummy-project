import {
  Wrap,
  ControlWrap,
  Title,
  ControlButtonsWrap,
  DecreaseButton,
  MinusIcon,
  AmountIngredientrs,
  IncreaseButton,
  PlusIcon,
  ErrorWrap,
  AddRecipeText,
  ErrorText,
  IngredientsList,
} from "../RecipeIngridientsFields/RecipeIngridientsFields.styled";
import SelectionIngridients from "./SelectionIngridients/SelectionIngridients";
import { nanoid } from "@reduxjs/toolkit";
import { units } from "../../../data/addRecipe";

const RecipeIngridientsFields = ({
  ingredients = [],
  setIngredients,
  onUpdate,
  onRemove,
  allIngredients = [],
  formErrors = {},
}) => {
  const onDecreaseClickHandler = () => {
    if (ingredients.length === 0) {
      return;
    }
    setIngredients(ingredients.slice(0, ingredients.length - 1));
  };

  const onIncreaseClickHandler = () => {
    const id = nanoid();
    const newData = { id, title: {}, amount: "", unit: "-" };
    const updateIngredients = [...ingredients, newData];
    setIngredients(updateIngredients);
  };

  return (
    <Wrap>
      <ControlWrap>
        <Title>Ingredients</Title>
        <ControlButtonsWrap>
          <DecreaseButton type="button" onClick={onDecreaseClickHandler}>
            <MinusIcon />
          </DecreaseButton>

          <AmountIngredientrs>{ingredients.length}</AmountIngredientrs>

          <IncreaseButton type="button" onClick={onIncreaseClickHandler}>
            <PlusIcon />
          </IncreaseButton>
        </ControlButtonsWrap>
      </ControlWrap>

      <ErrorWrap>
        {ingredients.length === 0 && (
          <AddRecipeText>Add the ingredients</AddRecipeText>
        )}

        {ingredients.length === 0 && formErrors?.selectedIngredients && (
          <ErrorText>{formErrors.selectedIngredients}</ErrorText>
        )}
      </ErrorWrap>

      {ingredients.length > 0 && (
        <IngredientsList>
          {ingredients.map((item, index) => (
            <SelectionIngridients
              key={item.id}
              allIngredients={allIngredients}
              onUpdate={onUpdate}
              onRemove={onRemove}
              units={units}
              id={item.id}
              data={item}
              errorMessage={
                formErrors?.selectedIngredients
                  ? formErrors.selectedIngredients[index]
                  : ""
              }
            />
          ))}
        </IngredientsList>
      )}
    </Wrap>
  );
};

export default RecipeIngridientsFields;
