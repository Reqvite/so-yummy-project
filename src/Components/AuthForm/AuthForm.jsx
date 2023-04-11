import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { register, login } from "redux/auth/operations";
import { useTheme } from "styled-components";
import {
  BackgroundImg,
  Box,
  BoxTitle,
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
import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";
import { useAuth } from "hooks";
import GoogleButton from "Components/ui/GoogleButton/GoogleButton";

const AuthForm = ({ page, redirect, title, schema }) => {
  const dispatch = useDispatch();
  const [loginCredentials, setLoginCredentials] = useState(false);
  const { isLoading } = useAuth();
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
          <BoxTitle>
            <Heading>{title}</Heading>
            <GoogleButton />
          </BoxTitle>
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
            {({ errors, touched }) => {
              const userError = errors.name && touched.name;
              const userSuccess = !errors.name && touched.name;
              const emailError = errors.email && touched.email;
              const emailSucces = !errors.email && touched.email;
              const passwordError = errors.password && touched.password;
              const passwordSucces = !errors.password && touched.password;
              return (
                <FormBox>
                  {page === "register" && (
                    <>
                      <Label
                        htmlFor="name"
                        style={{
                          marginBottom: userError && 0,
                        }}
                      >
                        <User $error={userError} $success={userSuccess} />
                        {userSuccess && <SuccesIcon />}
                        {userError && <ErrorIcon />}
                        <Input
                          autoComplete="off"
                          type="text"
                          name="name"
                          placeholder="Name"
                          $error={userError}
                          $success={userSuccess}
                        />
                        {userError ? <Error>{errors.name}</Error> : null}
                      </Label>
                    </>
                  )}
                  <Label
                    htmlFor="email"
                    style={{
                      marginBottom: emailError && 0,
                    }}
                  >
                    <Mail $error={emailError} $success={emailSucces} />
                    {emailSucces && <SuccesIcon />}
                    {emailError && <ErrorIcon />}
                    <Input
                      autoComplete="off"
                      name="email"
                      type="email"
                      placeholder="Email"
                      $success={emailSucces}
                      $error={emailError}
                    />
                    {emailError ? <Error>{errors.email}</Error> : null}
                  </Label>
                  <Label
                    htmlFor="password"
                    style={{
                      marginBottom: passwordError && 0,
                    }}
                  >
                    <Password
                      $error={passwordError}
                      $success={passwordSucces}
                      $notSecure={
                        passwordError && errors.password?.includes("secure")
                      }
                    />
                    {passwordSucces && <SuccesIcon />}
                    {passwordError && errors.password?.includes("secure") ? (
                      <SecureIcon />
                    ) : (
                      passwordError && <ErrorIcon />
                    )}
                    <Input
                      autoComplete="off"
                      name="password"
                      type="password"
                      placeholder="Password"
                      $error={passwordError}
                      $success={passwordSucces}
                      $notSecure={errors.password?.includes("secure")}
                    />
                  </Label>
                  {passwordError ? (
                    <ErrorLast $notSecure={errors.password?.includes("secure")}>
                      {errors.password}
                    </ErrorLast>
                  ) : null}
                  <Button
                    disabled={isLoading}
                    type="submit"
                    whileHover={{
                      color: theme.colors.mainText,
                    }}
                  >
                    {isLoading ? (
                      <ButtonLoader color="white" width={25} />
                    ) : page === "login" ? (
                      "Sing in"
                    ) : (
                      "Sign up"
                    )}
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
              );
            }}
          </Formik>
        </Box>
      </div>
    </Container>
  );
};

export default AuthForm;
