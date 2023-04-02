import styled from "styled-components";

const UserLogoModal = () => {
  return <Wrap>123</Wrap>;
};

const Wrap = styled.div`
  background-color: ${(p) => p.theme.colors.mainBackground};
  position: absolute;
  top: 72px;
  right: 60px;
  width: 161px;
  height: 130px;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    top: 78px;
    right: 128px;
  }
  @media screen and (min-width: 1440px) {
    top: 78px;
    right: 211px;
  }
`;

export default UserLogoModal;
