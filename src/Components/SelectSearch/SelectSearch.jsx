import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextStyled } from "./SelectSearch.styled";
import { useEffect } from "react";

const {
  FormControl,
  Select,
  MenuItem,
  useMediaQuery,
} = require("@mui/material");
const { FormContainer } = require("Components/ui/SearchForm/SearchForm.styled");

const SelectSearch = ({ param }) => {
  const [query, setQuery] = useState(param ? param : "query");

  const isDesktop = useMediaQuery("(min-width: 1439.9px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );
  const isMobile = useMediaQuery(
    "(min-width: 375px) and (max-width: 767.98px)"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (param !== query) {
      navigate(`/search?${param}`);
    }
    navigate(`/search?${query}`);
  }, [query, navigate, param]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <FormContainer margTop="28px">
      <TextStyled>Search by:</TextStyled>
      <FormControl
        variant="filled"
        sx={{
          m: 1,
          minWidth: isMobile
            ? "146px"
            : isTablet
            ? "175px"
            : isDesktop && "198px",
          backgroundColor: "grey.100",
          borderRadius: "6px",
          "& div": {
            backgroundColor: "grey.100",
            color: "rgba(0,0,0,0.5)",
            fontSize: isMobile ? "12px" : "14px",
            borderRadius: "6px",
            fontFamily: "Poppins",
          },
          "& div.css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
            width: isMobile
              ? "146px"
              : isTablet
              ? "175px"
              : isDesktop && "198px",
            fontFamily: "Poppins",
            fontSize: "16px",
            lineHeight: "21px",
            letterSpacing: "-0.02em",
            color: "rgba(0,0,0,0.5)",
            backgroundColor: "white",
          },

          "& div.css-d9oaum-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
            {
              paddingTop: "10px",
              "&:focus": {
                backgroundColor: "grey.100",
              },
            },
          "& div::before": {
            border: "none",
          },
          "& div::after": {
            border: "none",
          },
          "& svg": {
            fill: "#8BAA36",
          },
        }}
      >
        <Select
          value={query}
          onChange={handleChange}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
          }}
        >
          <MenuItem value="query">Title</MenuItem>
          <MenuItem value="ingredient">Ingredient</MenuItem>
        </Select>
      </FormControl>
    </FormContainer>
  );
};

export default SelectSearch;
