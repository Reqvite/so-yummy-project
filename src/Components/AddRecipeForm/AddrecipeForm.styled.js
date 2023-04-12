import styled from "styled-components";

export const AddRecipeWrap = styled.div`
  max-width: 343px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 767px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
  }
`;

export const FollowUsAndPopularWrap = styled.div`
  width: 319px;
`;

export const GeneralWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
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
