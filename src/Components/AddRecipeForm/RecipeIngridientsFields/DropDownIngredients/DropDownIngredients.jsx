import { useState, useEffect, useRef, useCallback } from "react";
import { ReactComponent as ArrowIconList } from "../../../../assets/svg/ArrowIconList/ArrowIconList.svg";
import { nanoid } from "@reduxjs/toolkit";

import { Option, Title, List, Item } from "./DropDownIngreduents.styled";
import { useTheme } from "styled-components";

const DropDownIngredientsList = ({ list = [], option = "", setOption }) => {
  const [isActive, setIsActive] = useState(false);
  const input = useRef(null);

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

  const theme = useTheme();
  const activeColor = theme.colors.activeItemDropDownList;

  const handleOptionClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const handleItemClick = useCallback(
    (value) => {
      setOption(value);
      setIsActive(false);
    },
    [setOption]
  );

  return (
    <>
      <Option ref={input} onClick={handleOptionClick}>
        <Title>{option}</Title>

        <ArrowIconList width="20px" height="20px" />
      </Option>

      {isActive && (
        <List>
          {list.map((value) => (
            <Item
              key={nanoid()}
              style={{
                color: value === option ? activeColor : null,
              }}
              onClick={() => handleItemClick(value)}
            >
              {value}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default DropDownIngredientsList;
