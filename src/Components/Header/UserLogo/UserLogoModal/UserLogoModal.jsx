import styled from "styled-components";
import { ReactComponent as UserEdit } from "../../../../assets/svg/UserEditIcon/userEditIcon.svg";

const UserLogoModal = () => {
  return (
    <Wrap>
      <Button>
        <Text>Edit profile</Text>
        <UserEdit></UserEdit>
      </Button>
    </Wrap>
  );
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

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 23px;
  border: none;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: var(--textColorForModal);
  line-height: 1.6;
  cursor: pointer;
`;
const Text = styled.p``;

export default UserLogoModal;
