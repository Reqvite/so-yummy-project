import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register, login } from "redux/auth/operations";
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
                    name="password"
                    type="password"
                    placeholder="Password"
                    $error={errors.password && touched.password}
                    $success={!errors.password && touched.name}
                    $notSecure={errors.password?.includes("secure")}
                  />
                </Label>
                {errors.password && touched.password ? (
                  <ErrorLast $notSecure={errors.password?.includes("secure")}>
                    {errors.password}
                  </ErrorLast>
                ) : null}
                <Button type="submit">Submit</Button>
                <Link to={page === "login" ? "/register" : "/signin"}>
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
