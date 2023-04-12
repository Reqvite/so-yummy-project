import { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowIconList } from "../../../../assets/svg/ArrowIconList/ArrowIconList.svg";
import { nanoid } from "@reduxjs/toolkit";

import { Option, Title, List, Item } from "./DropDownIngreduents.styled";
import { useTheme } from "styled-components";

const DropDownIngredientsList = ({ list = [], option = "", setOption }) => {
  const [isActive, setIsActive] = useState(false);
  const input = useRef(null);

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
  return (
    <>
      <Option ref={input} onClick={() => setIsActive(!isActive)}>
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
              onClick={() => {
                setOption(value);
                setIsActive(false);
              }}
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
