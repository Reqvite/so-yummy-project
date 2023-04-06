import { Button, TrashSvg } from "./DeleteButton.styled";

const DeleteButton = ({ bgColor }) => {
  return (
    <Button $bgColor={bgColor}>
      <TrashSvg />
    </Button>
  );
};

export default DeleteButton;
