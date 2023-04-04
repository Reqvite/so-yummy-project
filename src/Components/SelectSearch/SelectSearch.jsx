import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { TextStyled } from "./SelectSearch.styled";

const {
  FormControl,
  Select,
  MenuItem,
  useMediaQuery,
} = require("@mui/material");
const { FormContainer } = require("Components/ui/SearchForm/SearchForm.styled");

const SelectSearch = () => {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setQuery(event.target.value);
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
            fontSize: isMobile ? "12" : "14px",
            borderRadius: "6px",
          },
          //   "& li.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
          //     backgroundColor: "white",
          //     height: "40px",
          //   },
          //   "& li.Mui-selected": {
          //     backgroundColor: "white",
          //   },
          //   "& li.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover": {
          //     backgroundColor: "white",
          //   },

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
          <MenuItem value="">Title</MenuItem>
          <MenuItem value="Ingredient">Ingredient</MenuItem>
        </Select>
      </FormControl>
    </FormContainer>
  );
};

export default SelectSearch;
