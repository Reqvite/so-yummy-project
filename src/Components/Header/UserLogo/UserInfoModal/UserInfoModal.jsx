import { ErrorMessage, Field, Form, Formik } from "formik";
import CloseButton from "../../MobileMenu/CloseButton/CloseButton";
import {
  FieldStyled,
  ImgBox,
  Input,
  Label,
  PlusSvg,
  UserImg,
  UserSvg,
  Wrap,
} from "./UserInfoModal.styled";

const UserInfoModal = ({ toggleInfoModal }) => {
  const initialValues = {
    photo: "",
    nickname: "",
  };
  return (
    <Wrap>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        // onSubmit={onSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <div>
              <Label htmlFor="photo">
                <ImgBox>
                  <UserImg />
                  <UserSvg />
                  <PlusSvg />
                  <FieldStyled
                    name="photo"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }}
                  />
                  <ErrorMessage name="photo" />
                </ImgBox>
              </Label>
            </div>
            <div>
              <label htmlFor="nickname">
                <Input name="nickname" />
                {errors.nickname && touched.nickname && (
                  <div>{errors.nickname}</div>
                )}
              </label>
            </div>
            <button type="submit">Save changes</button>
          </Form>
        )}
      </Formik>
      Info
      <CloseButton toggleModal={toggleInfoModal} />
    </Wrap>
  );
};

export default UserInfoModal;
