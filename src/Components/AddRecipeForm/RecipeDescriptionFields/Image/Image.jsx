import { useEffect, useRef } from "react";
import { Wrap, Input, PreviewImage, IconOnImage } from "./Image.styled";

const ImgWithPreview = ({ imgAdd, setImgAdd }) => {
  const input = useRef(null);

  function handleImageChange() {
    const preview = input.current;
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    preview.style.opacity = 1;
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImgAdd(reader.result);
      preview.src = reader.result;
    };
  }

  useEffect(() => {
    if (!imgAdd) {
      input.current.src = "";
      input.current.style.opacity = 0;
    }
  }, [imgAdd]);

  return (
    <Wrap>
      <Input type="file" onChange={handleImageChange} />

      <IconOnImage />

      <PreviewImage src="" alt="Preview image" ref={input} />
    </Wrap>
  );
};

export default ImgWithPreview;
