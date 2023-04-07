import styled from "styled-components";
import { ReactComponent as Icon } from "../../../../assets/svg/InputFotoRecipe/inputFotoRecipeIcon.svg";

export const Wrap = styled.div`
  position: relative;
  background: #8baa36;
  border: transparent;
  border-radius: 8px;
  overflow: hidden;
  width: 268px;
  height: 279px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
`;

export const IconOnImage = styled(Icon)`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const PreviewImage = styled.img`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
