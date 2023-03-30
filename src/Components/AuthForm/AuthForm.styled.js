import { Form, Field } from "formik";
import styled from "styled-components";

export const Box = styled.div`
  color: #fafafa;
  padding: 44px 50px;
  width: 500px;
  height: 484px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const Heading = styled.h1`
  margin-bottom: 32px;
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  :not(:last-of-type) {
    margin-bottom: 24px;
  }
  :last-of-type {
    margin-bottom: 50px;
  }
`;
