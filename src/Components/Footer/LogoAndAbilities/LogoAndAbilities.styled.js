import styled from "styled-components";

export const Wrap = styled.div`
  @media (min-width: 768px) {
    margin-right: 175px;
  }
  @media (min-width: 1440px) {
    margin-right: 119px;
  }
`;

export const LogoWrap = styled.div`
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

export const LogoText = styled.p``;

export const AbilitiesList = styled.ul`
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

export const AbilitiesListItem = styled.li``;
