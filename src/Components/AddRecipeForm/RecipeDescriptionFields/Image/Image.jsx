import { useEffect, useRef } from "react";
import { Wrap, Input, PreviewImage, IconOnImage } from "./Image.styled";

const ImgWithPreview = ({ imgAdd, setImgAdd }) => {
  const input = useRef(null);

  function handleImageChange(event) {
    const preview = input.current;
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    };

    preview.style.opacity = 1;

    reader.readAsDataURL(file);

    setImgAdd(event.target.files[0]);
  }

  useEffect(() => {
    if (!imgAdd) {
      input.current.src = "";
      input.current.style.opacity = 0;
    }
  }, [imgAdd]);

  return (
    <Wrap>
      <Input
        type="file"
        onChange={(e) => {
          handleImageChange(e);
        }}
      />

      <IconOnImage width="64" height="64" />

      <PreviewImage src="" alt="" ref={input} />
    </Wrap>
  );
};

export default ImgWithPreview;
