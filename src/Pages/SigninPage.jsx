import AuthForm from "Components/AuthForm/AuthForm";
import { LoginSchema } from "helpers/validations";

const SigninPage = () => {
  return (
    <AuthForm
      page="login"
      redirect="Registration"
      title="Sign in"
      schema={LoginSchema}
    />
  );
};

export default SigninPage;
