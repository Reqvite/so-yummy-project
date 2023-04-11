import { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { selectIngredients } from "redux/ingredients/selectors";
import { getIngredients } from "redux/ingredients/operations";
import { Form, FormInput, HintList, SearchBtn } from "./SearchForm.styled";
import { Item } from "../../AddRecipeForm/DropDownList/DropDownList.styled";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isActive, setIsActive] = useState(false);

  const ingredients = useSelector(selectIngredients);
  const input = useRef(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    const onClick = (e) => {
      input?.current?.contains(e.target) || setIsActive(!isActive);
    };

    if (isActive) {
      document.addEventListener("click", onClick);
    }
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [isActive]);

  useEffect(() => {
    if (
      searchParams.get("ingredient") === null &&
      searchParams.get("query") !== undefined
    ) {
      setFilter(searchParams.get("query"));
    }
    if (
      searchParams.get("ingredient") !== undefined &&
      searchParams.get("query") === null
    ) {
      setFilter(searchParams.get("ingredient"));
    }
  }, [searchParams]);

  const filteredMeals = useMemo(() => {
    if (!filter) return ingredients;
    const normalizeNameMeal = filter.toLowerCase();
    return ingredients.filter((el) =>
      el.ttl.toLowerCase().includes(normalizeNameMeal)
    );
  }, [ingredients, filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsActive(false);
    if (
      searchParams.get("query") === null &&
      searchParams.get("ingredient") !== undefined
    ) {
      setSearchParams({ ingredient: e.target[0].value.toLowerCase() });
    }
    if (
      searchParams.get("ingredient") === null &&
      searchParams.get("query") !== undefined
    ) {
      setSearchParams({ query: e.target[0].value.toLowerCase() });
    }
    if (e.target[0].value === "") {
      toast.warning("Please enter the value");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        value={filter}
        type="text"
        name="searchValue"
        placeholder="Search query"
        onChange={handleChange}
        autoComplete="off"
        ref={input}
        onClick={() => setIsActive(!isActive)}
      />
      <SearchBtn type="submit">Search</SearchBtn>
      {isActive &&
        filteredMeals.length !== 0 &&
        searchParams.get("ingredient") !== null && (
          <HintList>
            {filteredMeals.map(({ _id, ttl }) => (
              <Item
                key={_id}
                onClick={(e) => {
                  setFilter(ttl.toLowerCase());
                  setIsActive(false);
                }}
              >
                {ttl}
              </Item>
            ))}
          </HintList>
        )}
    </Form>
  );
};

export default SearchForm;
