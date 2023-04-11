import { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowIconList } from "../../../assets/svg/ArrowIconList/ArrowIconList.svg";
import { nanoid } from "nanoid";

import { Option, Title, List, Item } from "./DropDownList.styled";

const DropDownList = ({ list = [], option = "", setOption }) => {
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
              onClick={(e) => {
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

export default DropDownList;
