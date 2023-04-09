import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  margin-top: 72px;

  @media screen and (max-width: 767px) {
    margin-bottom: 72px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 100px;
  }
`;

export const Button = styled.button`
  height: 46px;
  width: 129px;
  border: none;
  border-radius: 18px 44px;
  background-color: ${(p) => p.theme.colors.buttonBg};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.secondaryText};
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    height: 52px;
    width: 161px;
  }
`;
