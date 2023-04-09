import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../redux/auth/operations";
import CloseButton from "../../MobileMenu/CloseButton/CloseButton";
import { selectTheme } from "redux/theme/selectors";
import {
  ButtonsWrap,
  CancelButton,
  ConfirmButton,
  Text,
  Wrap,
} from "./UserConfirmModal.styled";
import { useTheme } from "styled-components";

const UserConfirmModal = ({ toggleConfirmModal }) => {
  const themeData = useTheme();
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => {
    toggleConfirmModal();
    dispatch(logOut());
  };

  const theme = useSelector(selectTheme);
  const isDark = theme === "dark";

  return (
    <Wrap $isDark={isDark}>
      <Text>Are you sure you want to log out?</Text>
      <ButtonsWrap>
        <ConfirmButton
          onClick={() => handleLogoutButtonClick()}
          whileHover={{
            color: "#23262A",
          }}
        >
          Confirm
        </ConfirmButton>

        <CancelButton
          onClick={() => toggleConfirmModal()}
          whileHover={{
            backgroundColor: themeData.colors.accentColor,
          }}
        >
          Cancel
        </CancelButton>
      </ButtonsWrap>

      <CloseButton toggleModal={toggleConfirmModal} />
    </Wrap>
  );
};

export default UserConfirmModal;
