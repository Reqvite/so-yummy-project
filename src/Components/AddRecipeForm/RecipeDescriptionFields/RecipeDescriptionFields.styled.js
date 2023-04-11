import styled from "styled-components";

export const Wrap = styled.div`
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const ImageErrorWrap = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const InputsContainer = styled.div`
  width: 343px;
  @media screen and (min-width: 768px) {
    width: 393px;
  }
  color: ${(p) => p.theme.colors.mainText};
`;

export const TitleInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: transparent;
  background-color: inherit;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  outline: transparent;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};

  ::placeholder {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.maintext};
  }
`;

export const MessageErrorWrap = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #e74a3b; ;
`;

export const DescriptionInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: transparent;
  background-color: inherit;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  outline: transparent;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};

  ::placeholder {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.maintext};
  }
`;

export const DescriptionErrorWrap = styled.div`
  margin-bottom: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;
export const CategoryWrap = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const CategoryInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: transparent;
  background-color: inherit;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  outline: transparent;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};
  cursor: pointer;

  ::placeholder {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.maintext};
  }
`;

export const TimeWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const TimeInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: transparent;
  background-color: inherit;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  outline: transparent;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.opacityText};
  cursor: pointer;

  ::placeholder {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;
