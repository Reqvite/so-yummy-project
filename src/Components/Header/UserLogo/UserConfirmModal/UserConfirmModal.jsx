import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../redux/auth/operations";
import CloseButton from "../../MobileMenu/CloseButton/CloseButton";

const UserConfirmModal = ({ toggleConfirmModal }) => {
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => {
    toggleConfirmModal();
    dispatch(logOut);
  };

  return (
    <Wrap>
      <Text>Are you sure you want to log out?</Text>
      <ButtonsWrap>
        <ConfirmButton onClick={() => handleLogoutButtonClick()}>
          Confirm
        </ConfirmButton>

        <CancelButton onClick={() => toggleConfirmModal()}>Cancel</CancelButton>
      </ButtonsWrap>

      <CloseButton toggleModal={toggleConfirmModal} />
    </Wrap>
  );
};

const slideDown = keyframes`
  0% {
   opacity: 0;
  }
  100% {
     opacity: 1;
  }
`;

const Wrap = styled.div`
  width: 330px;
  height: 179px;
  padding: 50px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  animation-name: ${slideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 215px;
    border-radius: 24px;
  }
`;

const Text = styled.p`
  margin-bottom: 24px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  gap: 16px;
`;

const CancelButton = styled.button`
  width: 137px;
  height: 49px;
  border: none;
  border-radius: 6px;
  color: ${(p) => p.theme.colors.mainText};
  background-color: #d9d9d9;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

const ConfirmButton = styled.button`
  width: 137px;
  height: 49px;
  border: none;
  border-radius: 6px;
  color: ${(p) => p.theme.colors.secondaryText};
  background-color: ${(p) => p.theme.colors.accentColor};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export default UserConfirmModal;
