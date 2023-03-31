import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { register, login } from "redux/auth/operations";
import {
  BackgroundImg,
  Box,
  Container,
  FormBox,
  Heading,
  Input,
} from "./AuthForm.styled";

const AuthForm = ({ page, redirect, title, schema }) => {
  const dispatch = useDispatch();
  const initialValues =
    page === "login"
      ? { email: "", password: "" }
      : {
          name: "",
          email: "",
          password: "",
        };
  return (
    <Container>
      <BackgroundImg />
      <Box>
        <Heading>{title}</Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(credentials) => {
            page === "login"
              ? dispatch(login(credentials))
              : dispatch(register(credentials));
          }}
        >
          {({ errors, touched }) => (
            <FormBox>
              {page === "register" && (
                <>
                  <Input type="text" name="name" placeholder="Name" />
                  {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </>
              )}
              <Input name="email" type="email" placeholder="Email" />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
              <Input name="password" type="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}
              <button type="submit">Submit</button>
            </FormBox>
          )}
        </Formik>
        <NavLink to={page === "login" ? "/register" : "/signin"}>
          {redirect}
        </NavLink>
      </Box>
    </Container>
  );
};

export default AuthForm;
