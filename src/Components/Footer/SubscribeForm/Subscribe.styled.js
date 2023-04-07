import styled from "styled-components";
import { ReactComponent as MailIcon } from "../../../assets/svg/MailIcon/mailIcon.svg";

export const SubscribeWrap = styled.div`
  @media screen and (min-width: 1440px) {
    width: 339px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  margin-bottom: 14px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  letter-spacing: -0.02em;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const SubscribeFormWrap = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    gap: 16px;
    flex-direction: column;
  }
`;

export const InputArea = styled.div`
  position: relative;
`;

export const Icon = styled(MailIcon)`
  position: absolute;
  top: 35%;
  left: 14px;
  stroke: var(--whiteColor);
  opacity: 0.8;
  width: 16px;
  height: 12px;

  @media screen and (min-width: 768px) {
    top: 35%;
    left: 15px;
    width: 20px;
    height: 16px;
  }
`;

export const Input = styled.input`
  display: inline-block;
  padding: 11px 42px;
  width: 204px;
  height: 38px;
  position: relative;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  background-color: transparent;
  color: ${(p) => p.theme.colors.footerText};
  border: 1px solid ${(p) => p.theme.colors.footerText};
  border-radius: 6px;

  ::placeholder {
    letter-spacing: -0.02em;
    font-weight: 400;
    font-size: 10px;
    font-style: normal;
    line-height: 1.5;
    text-transform: none;
    color: ${(p) => p.theme.colors.footerText};

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width: 259px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 338px;
    height: 60px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 204px;
  height: 38px;
  background: ${(p) => p.theme.colors.footerButtonBg};
  color: ${(p) => p.theme.colors.footerText};
  border: none;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: color 0.5s;

  :hover {
    color: ${(p) => p.theme.colors.footerButtonHover};
  }
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
  }
`;
