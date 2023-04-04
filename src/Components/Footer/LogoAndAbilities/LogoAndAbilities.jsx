import React from "react";
import styled from "styled-components";
import Logo from "../../../Components/ui/Logo/Logo";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

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
const Wrap = styled.div`
  @media (min-width: 768px) {
    margin-right: 175px;
  }
  @media (min-width: 1440px) {
    margin-right: 119px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.015em;
  text-align: left;
  padding: 0px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;

    gap: 12px;
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

const LogoText = styled.p``;

const AbilitiesList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: -0.02em;
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    max-width: 418px;
    gap: 12px;
  }
`;

const AbilitiesListItem = styled.li``;

export default LogoAndAbilities;
