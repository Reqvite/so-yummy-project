import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .matches(/^[a-zA-Z0-9]+$/, "Special symbols are not allowed")
    .min(3)
    .max(15),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(16, "Password cannot be longer than 20 characters")
    .test(
      "password",
      "Your password is little secure. Add a capital letter.",
      (value) => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value || "")
    ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(16, "Password cannot be longer than 20 characters"),
});
