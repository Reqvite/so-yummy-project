import { Watch } from "react-loader-spinner";
import LoaderWrapper from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Watch
        height="150"
        width="150"
        radius="48"
        color="#8BAA36"
        ariaLabel="watch-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
