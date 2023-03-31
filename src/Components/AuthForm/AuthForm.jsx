import { Formik } from "formik";
import { useAuth } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "redux/auth/operations";
import { useTheme } from "styled-components";
import {
  BackgroundImg,
  Box,
  Button,
  Container,
  Error,
  ErrorIcon,
  ErrorLast,
  FormBox,
  Heading,
  Input,
  Label,
  Link,
  Mail,
  Password,
  SecureIcon,
  SuccesIcon,
  User,
} from "./AuthForm.styled";
import AuthSvg from "./AuthSvg";

const AuthForm = ({ page, redirect, title, schema }) => {
  const dispatch = useDispatch();
  const [loginCredentials, setLoginCredentials] = useState(false);
  const theme = useTheme();

  const initialValues =
    page === "login"
      ? { email: "", password: "" }
      : {
          name: "",
          email: "",
          password: "",
        };

  const { status } = useAuth();

  useEffect(() => {
    if (status) {
      dispatch(login(loginCredentials));
    }
  }, [dispatch, status, loginCredentials]);

  return (
    <Container>
      <BackgroundImg />
      <div>
        <Box>
          <AuthSvg />
          <Heading>{title}</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(credentials) => {
              page === "login"
                ? dispatch(login(credentials))
                : dispatch(register(credentials));

              setLoginCredentials(credentials);
            }}
          >
            {({ errors, touched }) => (
              <FormBox>
                {page === "register" && (
                  <>
                    <Label
                      htmlFor="name"
                      style={{
                        marginBottom: errors.name && touched.name && 0,
                      }}
                    >
                      <User />
                      {!errors.name && touched.name && <SuccesIcon />}
                      {errors.name && touched.name && <ErrorIcon />}
                      <Input
                        autoComplete="off"
                        type="text"
                        name="name"
                        placeholder="Name"
                        $error={errors.name && touched.name}
                        $success={!errors.name && touched.name}
                      />
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </Label>
                  </>
                )}
                <Label
                  htmlFor="email"
                  style={{
                    marginBottom: errors.email && touched.email && 0,
                  }}
                >
                  <Mail />
                  {!errors.email && touched.email && <SuccesIcon />}
                  {errors.email && touched.email && <ErrorIcon />}
                  <Input
                    autoComplete="off"
                    name="email"
                    type="email"
                    placeholder="Email"
                    $success={!errors.email && touched.email}
                    $error={errors.email && touched.email}
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </Label>
                <Label
                  htmlFor="password"
                  style={{
                    marginBottom: errors.password && touched.password && 0,
                  }}
                >
                  <Password />
                  {!errors.password && touched.password && <SuccesIcon />}
                  {errors.password && touched.password && <ErrorIcon />}
                  {errors.password?.includes("secure") && <SecureIcon />}
                  <Input
                    autoComplete="off"
                    name="password"
                    type="password"
                    placeholder="Password"
                    $error={errors.password && touched.password}
                    $success={!errors.password && touched.password}
                    $notSecure={errors.password?.includes("secure")}
                  />
                </Label>
                {errors.password && touched.password ? (
                  <ErrorLast $notSecure={errors.password?.includes("secure")}>
                    {errors.password}
                  </ErrorLast>
                ) : null}
                <Button
                  type="submit"
                  whileHover={{
                    color: theme.colors.mainText,
                  }}
                >
                  {page === "login" ? "Sing in" : "Sign up"}
                </Button>
                <Link
                  to={page === "login" ? "/register" : "/signin"}
                  whileHover={{
                    color: theme.colors.accentColor,
                  }}
                >
                  {redirect}
                </Link>
              </FormBox>
            )}
          </Formik>
        </Box>
      </div>
    </Container>
  );
};

export default AuthForm;
