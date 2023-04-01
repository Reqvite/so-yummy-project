import styled from "styled-components";
import bgImage from "../../../assets/images/MobileMenu/bgLeaves.png";

const ImageBackgroundStyled = styled.img`
  position: absolute;
  max-width: 187px;
  height: 100px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  ${(p) => p.theme.sizes.tablet} {
    max-width: 360px;
    height: 200px;
  }
  ${(p) => p.theme.sizes.desktop} {
    max-width: 500px;
    height: 250px;
  }
`;

const ImageBackground = () => {
  return <ImageBackgroundStyled src={bgImage} alt="salad leaves" />;
};

export default ImageBackground;
