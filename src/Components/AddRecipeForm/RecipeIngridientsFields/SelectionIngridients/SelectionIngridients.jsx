import { useState, useEffect, useMemo, useRef } from "react";
import {
  IngredientSelectionItem,
  IngredientWrap,
  Arrow,
  ArrowWrap,
  SearchIngredientInput,
  AllIngredientsSelectionList,
  AllIngredientsSelectionItem,
  AmountWrap,
  AmountInput,
  UnitsWrap,
  DeleteButton,
  CloseIcon,
  ErrorMessage,
} from "./SelectionIngridients.styled";
import { useTheme } from "styled-components";

import DropDownIngredientsList from "../DropDownIngredients/DropDownIngredients";

const SelectionIngridients = ({
  allIngredients = [],
  units,
  data,
  id,
  onUpdate,
  onRemove,
  errorMessage,
}) => {
  const input = useRef(null);

  const [title, setTitle] = useState(data.title);
  const [unit, setUnit] = useState(data.unit);
  const [filter, setFilter] = useState(() => data.title?.ttl || "");
  const [amount, setAmount] = useState(data.amount);
  const [isActive, setIsActive] = useState(false);

  const filteredMeals = useMemo(() => {
    if (!filter) return allIngredients;
    const normalizeNameMeal = filter.toLowerCase();
    return allIngredients.filter((el) =>
      el.ttl.toLowerCase().includes(normalizeNameMeal)
    );
  }, [allIngredients, filter]);

  useEffect(() => {
    if (data.title === title && data.unit === unit && data.amount === amount)
      return;

    onUpdate(id, { title, amount, unit });
  }, [onUpdate, title, data.title, amount, data.unit, unit, data.amount, id]);

  useEffect(() => {
    const onClick = (e) => {
      input.current.contains(e.target) || setIsActive(!isActive);
    };

    if (isActive) {
      document.addEventListener("click", onClick);
    }
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [isActive]);

  const theme = useTheme();
  const activeColor = theme.colors.accentColor;

  const searchIngredientHandler = (e) => {
    setFilter(e.target.value);
    setTitle({});
    setIsActive(true);
  };
  const allIngredientsSelectionHandler = (_id, ttl) => {
    setFilter(ttl);
    setTitle({ _id, ttl });
    setIsActive(false);
  };
  return (
    <IngredientSelectionItem>
      <IngredientWrap ref={input}>
        <SearchIngredientInput
          type="text"
          name="ingredient"
          autoComplete="off"
          placeholder="Start enter ingredient"
          value={filter}
          onChange={(e) => {
            searchIngredientHandler(e);
          }}
        />

        {title.length !== 0 && filteredMeals.length !== 0 && (
          <ArrowWrap onClick={() => setIsActive(!isActive)}>
            <Arrow />
          </ArrowWrap>
        )}

        {isActive && title.length !== 0 && filteredMeals.length !== 0 && (
          <AllIngredientsSelectionList>
            {filteredMeals.map(({ _id, ttl, desc, t, thb }) => (
              <AllIngredientsSelectionItem
                key={_id}
                onClick={() => {
                  allIngredientsSelectionHandler(_id, ttl, desc, t, thb);
                }}
                style={{
                  color: ttl === title.ttl ? activeColor : null,
                }}
              >
                {ttl}
              </AllIngredientsSelectionItem>
            ))}
          </AllIngredientsSelectionList>
        )}
      </IngredientWrap>

      <AmountWrap>
        <AmountInput
          type="number"
          name="amount"
          autoComplete="off"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <UnitsWrap>
          <DropDownIngredientsList
            list={units}
            option={unit}
            setOption={setUnit}
          />
        </UnitsWrap>
      </AmountWrap>

      <DeleteButton
        type="button"
        onClick={() => {
          onRemove(id);
        }}
      >
        <CloseIcon />
      </DeleteButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </IngredientSelectionItem>
  );
};

export default SelectionIngridients;
