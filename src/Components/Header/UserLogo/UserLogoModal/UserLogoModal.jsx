import {
  ArrowIcon,
  Button,
  ButtonLogout,
  EditIcon,
  Text,
  Wrap,
} from "./UserLogoModal.styled";

const UserLogoModal = ({
  toggleLogoModal,
  toggleInfoModal,
  toggleConfirmModal,
}) => {
  const editButtonClickHandler = () => {
    toggleLogoModal();
    toggleInfoModal();
  };

  const confirmButtonClickHandler = () => {
    toggleLogoModal();
    toggleConfirmModal();
  };
  return (
    <Wrap>
      <Button onClick={() => editButtonClickHandler()}>
        <Text>Edit profile</Text>
        <EditIcon />
      </Button>

      <ButtonLogout onClick={() => confirmButtonClickHandler()}>
        Log out
        <ArrowIcon />
      </ButtonLogout>
    </Wrap>
  );
};

export default UserLogoModal;
