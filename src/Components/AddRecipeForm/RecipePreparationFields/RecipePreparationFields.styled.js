import styled from "styled-components";

export const Wrap = styled.div`
  margin-bottom: 32px;
  position: relative;
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.cardsText};
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Textarea = styled.textarea`
  font-family: inherit;
  border-radius: 6px;
  width: 100%;
  height: 154px;
  overflow-y: auto;
  resize: none;
  padding: 10px 16px;
  outline: none;
  background: #d9d9d9;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 98%;
  left: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #e74a3b;
`;
