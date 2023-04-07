import { ErrorMessage, Form, Formik } from "formik";
import CloseButton from "../../MobileMenu/CloseButton/CloseButton";
import {
  Button,
  EditSvg,
  Error,
  FieldStyled,
  ImgBox,
  Input,
  Label,
  PlusSvg,
  UserSvg,
  UserSvgBlack,
  Wrap,
} from "./UserInfoModal.styled";
import { InputLabel } from "@mui/material";
import UserPreviewImg from "./UserPreviewImg";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "redux/auth/operations";
import { useState } from "react";
import { useAuth } from "hooks";
import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";
import { useTheme } from "styled-components";
import { UpdateUserSchema } from "helpers/validations";
import { selectTheme } from "redux/theme/selectors";

const UserInfoModal = ({ toggleInfoModal }) => {
  const theme = useTheme();
  const {
    user: { avatarURL },
  } = useAuth();

  const {
    user: { name },
    isLoading,
  } = useAuth();
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(avatarURL);

  const initialValues = {
    file: null,
    nickname: name,
  };

  const getPhoto = (url) => {
    setPhoto(url);
  };

  const themeSelect = useSelector(selectTheme);
  const isDark = themeSelect === "dark";

  return (
    <Wrap $isDark={isDark}>
      <Formik
        initialValues={initialValues}
        validationSchema={UpdateUserSchema}
        onSubmit={(values) =>
          dispatch(updateUser({ avatar: photo, name: values.nickname }))
        }
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <div>
              <Label htmlFor="photo">
                <ImgBox>
                  {(values.file || avatarURL) && (
                    <UserPreviewImg
                      file={values.file}
                      avatarURL={avatarURL}
                      getPhoto={getPhoto}
                    />
                  )}
                  {!photo && <UserSvg />}
                  <PlusSvg />
                  <FieldStyled
                    name="photo"
                    type="file"
                    onChange={(e) =>
                      setFieldValue("file", e.currentTarget.files[0])
                    }
                  />
                  <ErrorMessage name="photo" />
                </ImgBox>
              </Label>
            </div>
            <div>
              <InputLabel htmlFor="nickname">
                <UserSvgBlack />
                <EditSvg />
                <Input
                  name="nickname"
                  onChange={(e) => setFieldValue("nickname", e.target.value)}
                />
              </InputLabel>
              {errors.nickname && touched.nickname && (
                <Error>{errors.nickname}</Error>
              )}
              <Button
                type="submit"
                disabled={isLoading}
                whileHover={{
                  color: theme.colors.mainText,
                }}
              >
                {isLoading ? (
                  <ButtonLoader color="white" width={25} />
                ) : (
                  "Save changes"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <CloseButton toggleModal={toggleInfoModal} />
    </Wrap>
  );
};

export default UserInfoModal;
