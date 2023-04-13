import styled from "styled-components";
import { ReactComponent as Icon } from "../../../../assets/svg/InputFotoRecipe/inputFotoRecipeIcon.svg";

export const Wrap = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.accentColor};
  border: transparent;
  border-radius: 8px;
  overflow: hidden;
  width: 279px;
  height: 268px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const IconOnImage = styled(Icon)`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 64;
  height: 64;
`;

export const PreviewImage = styled.img`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
