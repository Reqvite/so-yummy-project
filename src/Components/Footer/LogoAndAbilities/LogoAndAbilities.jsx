import React from "react";
import Logo from "../../../Components/ui/Logo/Logo";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import {
  Wrap,
  LogoWrap,
  LogoText,
  AbilitiesList,
  AbilitiesListItem,
} from "./LogoAndAbilities.styled";

const LogoAndAbilities = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  let width = "44px";
  let height = "44px";

  if (isMobile) {
    width = "32px";
    height = "32px";
  }

  return (
    <Wrap>
      <LogoWrap>
        <NavLink to="/main">
          <Logo footer={true} width={width} height={height} />
        </NavLink>
        <LogoText>So Yummy</LogoText>
      </LogoWrap>

      <AbilitiesList>
        <AbilitiesListItem>
          Database of recipes that can be replenished{" "}
        </AbilitiesListItem>
        <AbilitiesListItem>
          Flexible search for desired and unwanted ingredients
        </AbilitiesListItem>
        <AbilitiesListItem>
          Ability to add your own recipes with photos
        </AbilitiesListItem>
        <AbilitiesListItem>Convenient and easy to use</AbilitiesListItem>
      </AbilitiesList>
    </Wrap>
  );
};

export default LogoAndAbilities;
