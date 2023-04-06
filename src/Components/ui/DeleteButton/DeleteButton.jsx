import { useLocation } from "react-router-dom";
import { Button, TrashSvg } from "./DeleteButton.styled";

const DeleteButton = ({ bgColor }) => {
  const { pathname } = useLocation();

  return (
    <Button $bgColor={bgColor}>
      <TrashSvg $isMyRecipePage={pathname?.includes("my")} />
    </Button>
  );
};

export default DeleteButton;
