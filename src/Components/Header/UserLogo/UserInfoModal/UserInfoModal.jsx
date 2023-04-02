import styled, { keyframes } from "styled-components";
import CloseButton from "../../MobileMenu/CloseButton/CloseButton";

const UserInfoModal = ({ toggleInfoModal }) => {
  return (
    <Wrap>
      Info
      <CloseButton toggleModal={toggleInfoModal} />
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
  height: 327px;
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
    height: 402px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 425px;
    border-radius: 30px;
  }
`;

export default UserInfoModal;
