import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "redux/theme/selectors";
import { toggleTheme } from "redux/theme/themeSlice";
import { Button, Span } from "./ThemeButton.styled";

const ThemeButton = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    const value = theme === "light" ? "dark" : "light";
    dispatch(toggleTheme(value));
  };

  return (
    <Button onClick={handleTheme}>
      <Span animate={theme === "dark" ? { x: 30 } : { x: 0 }} />
    </Button>
  );
};

export default ThemeButton;
