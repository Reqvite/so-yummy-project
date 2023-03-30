import AuthForm from "Components/AuthForm/AuthForm";
import { SignupSchema } from "helpers/validations";

const RegisterPage = () => {
  return (
    <AuthForm
      page="register"
      redirect="Sign in"
      title="Registration"
      schema={SignupSchema}
    />
  );
};

export default RegisterPage;
