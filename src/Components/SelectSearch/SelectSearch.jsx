import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FormContainer, TextStyled } from "./SelectSearch.styled";
import { FormControl, Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "styled-components";

const SelectSearch = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width: 1439.9px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );
  const isMobile = useMediaQuery(
    "(min-width: 375px) and (max-width: 767.98px)"
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const menuItems = [
    { value: "query", label: "Title" },
    { value: "ingredient", label: "Ingredient" },
  ];

  const [currentValue, setCurrentValue] = useState("query");

  useEffect(() => {
    if (searchParams.get("query") === null) {
      setCurrentValue("ingredient");
    }
    if (searchParams.get("ingredient") === null) {
      setCurrentValue("query");
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
    setSearchParams(e.target.value);
  };

  return (
    <FormContainer>
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
          backgroundColor: theme.colors.dropDownInput,
          borderRadius: "6px",
          "& div": {
            backgroundColor: theme.colors.dropDownInput,
            color: theme.colors.dropDownText,
            fontSize: isMobile ? "12px" : "14px",
            borderRadius: "6px",
            fontFamily: "Poppins",
          },
          "& div.css-llrb4p-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root:hover:not(.Mui-disabled, .Mui-error):before":
            {
              borderBottom: "none",
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
          value={currentValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: theme.colors.dropDownBg,
                "& .MuiList-root": {
                  paddingTop: "0px",
                  paddingBottom: "0px",
                },
                "& .MuiMenuItem-root": {
                  padding: "7px 14px",
                },
                ".Mui-selected": {
                  backgroundColor: "#EBF3D4",
                  "&:hover": {
                    backgroundColor: "#EBF3D4",
                  },
                },
              },
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              sx={{
                fontFamily: "Poppins",
                fontSize: isMobile ? "12px" : "14px",
                lineHeight: "21px",

                letterSpacing: "-0.02em",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormContainer>
  );
};

export default SelectSearch;
