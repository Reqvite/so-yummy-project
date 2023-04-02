import img from "../../../assets/images/empty-img.png";
import { ErrorText, ImgError } from "./EmptyErrorBox.styled";

const EmptyErrorBox = ({ text }) => {
  return (
    <>
      <ImgError src={img} alt="Empty list image" />
      <ErrorText>{text}</ErrorText>
    </>
  );
};

export default EmptyErrorBox;
