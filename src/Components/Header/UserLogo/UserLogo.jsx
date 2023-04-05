import { useState } from "react";

import styled from "styled-components";
import Modal from "../../ui/Modal/Modal";
import UserLogoModal from "../UserLogo/UserLogoModal/UserLogoModal";
import UserInfoModal from "../UserLogo/UserInfoModal/UserInfoModal";
import UserConfirmModal from "../UserLogo/UserConfirmModal/UserConfirmModal";
import { useAuth } from "hooks";

const UserLogo = () => {
  const {
    user: { name, avatarURL },
  } = useAuth();
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userLogoModal, setUserLogoModal] = useState(false);
  const [userConfirmModal, setUserConfirmModal] = useState(false);

  const toggleLogoModal = () => {
    setUserLogoModal(!userLogoModal);
  };
  const toggleInfoModal = () => {
    setUserInfoModal(!userInfoModal);
  };

  const toggleConfirmModal = () => {
    setUserConfirmModal(!userConfirmModal);
  };

  return (
    <UserLogoWrap>
      <UserInfoWrap onClick={toggleLogoModal}>
        <Avatar alt="User's avatar" src={avatarURL} />
        <UserName $theme>{name}</UserName>
      </UserInfoWrap>

      {userLogoModal && (
        <Modal toggleModal={toggleLogoModal}>
          <UserLogoModal
            toggleLogoModal={toggleLogoModal}
            toggleInfoModal={toggleInfoModal}
            toggleConfirmModal={toggleConfirmModal}
          />
        </Modal>
      )}
      {userInfoModal && (
        <Modal toggleModal={toggleInfoModal}>
          <UserInfoModal toggleInfoModal={toggleInfoModal} />
        </Modal>
      )}

      {userConfirmModal && (
        <Modal toggleModal={toggleConfirmModal}>
          <UserConfirmModal toggleConfirmModal={toggleConfirmModal} />
        </Modal>
      )}
    </UserLogoWrap>
  );
};

const UserLogoWrap = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;
const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-right: 28px;
  @media screen and (min-width: 768px) {
    margin-right: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 0px;
  }
`;

const Avatar = styled.img`
  display: inline-block;
  background-color: #589b58;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  margin-right: 14px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const UserName = styled.p`
  color: ${(p) => p.theme.colors.userNameColor};
`;

export default UserLogo;
