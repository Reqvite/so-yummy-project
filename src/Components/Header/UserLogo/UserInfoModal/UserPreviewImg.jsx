import { useEffect, useState } from "react";
import { UserImg } from "./UserInfoModal.styled";
import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";

const UserPreviewImg = ({ file, getPhoto }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      getPhoto(reader.result);
    };
  }, [getPhoto, file]);

  return (
    <div>
      {preview ? (
        <UserImg src={preview} alt="preview" width="100%" height="100%" />
      ) : (
        <ButtonLoader />
      )}
    </div>
  );
};

export default UserPreviewImg;
