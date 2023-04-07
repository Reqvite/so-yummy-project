import { useState, useEffect, useRef } from "react";

const DropDownList = ({ list = [], option = "", setOption }) => {
  const [isActive, setIsActive] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      inputEl.current.contains(e.target) || setIsActive(!isActive);
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
      <div ref={inputEl} onClick={(e) => setIsActive(!isActive)}>
        <span>{option}</span>
      </div>
      {isActive && (
        <ul>
          {list.map((value, index) => (
            <li
              key={value + "" + index}
              onClick={(e) => {
                setOption(value);
                setIsActive(false);
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDownList;
