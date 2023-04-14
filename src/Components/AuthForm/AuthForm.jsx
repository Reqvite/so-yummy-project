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
  IconBox,
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
import { useEffect, useState } from "react";

const AuthForm = ({ page, redirect, title, schema }) => {
  const dispatch = useDispatch();
  const { isLoading, status } = useAuth();
  const theme = useTheme();
  const [data, setData] = useState();

  useEffect(() => {
    if (status) {
      dispatch(login(data));
    }
  }, [status, dispatch, data]);

  const initialValues =
    page === "login"
      ? { email: "", password: "" }
      : {
          name: "",
          email: "",
          password: "",
        };

  const handleRegister = async (credentials) => {
    await dispatch(register(credentials));
  };

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
                : handleRegister(credentials);

              setData(credentials);
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
                      <Label htmlFor="name">
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
                        <IconBox>
                          {userError ? <Error>{errors.name}</Error> : null}
                        </IconBox>
                      </Label>
                    </>
                  )}
                  <Label htmlFor="email">
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
                    <IconBox>
                      {emailError ? <Error>{errors.email}</Error> : null}
                    </IconBox>
                  </Label>
                  <Label htmlFor="password">
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
                    <IconBox>
                      {passwordError ? (
                        <ErrorLast
                          $notSecure={errors.password?.includes("secure")}
                        >
                          {errors.password}
                        </ErrorLast>
                      ) : null}
                    </IconBox>
                  </Label>

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
