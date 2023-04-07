import styled from "styled-components";

export const Wrap = styled.div`
  width: 343px;
  margin-top: 72px;
`;
export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  height: 46px;
  width: 129px;
  border: none;
  border-radius: 18px 44px;
  background: #22252a;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: 52px;
    width: 161px;
  }
`;
