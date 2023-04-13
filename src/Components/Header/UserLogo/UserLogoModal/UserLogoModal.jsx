import { useSelector } from "react-redux";
import {
  ArrowIcon,
  Button,
  ButtonLogout,
  EditIcon,
  Text,
  Wrap,
} from "./UserLogoModal.styled";
import { selectTheme } from "redux/theme/selectors";

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

  const theme = useSelector(selectTheme);
  const isDark = theme === "dark";

  return (
    <Wrap $isDark={isDark}>
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
