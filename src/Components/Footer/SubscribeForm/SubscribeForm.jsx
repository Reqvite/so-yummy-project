import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";

import {
  SubscribeWrap,
  Title,
  Text,
  SubscribeFormWrap,
  Form,
  InputArea,
  Icon,
  Input,
  Button,
} from "./Subscribe.styled";
import { subscribe } from "redux/auth/operations";

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
    },

    onSubmit: (values) => {
      dispatch(subscribe({ email: values.email }));
    },
  });

  //   console.log(formik.errors.email);

  return (
    <SubscribeWrap>
      <Title>Subscribe to our Newsletter</Title>
      <Text>
        Subscribe to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Text>
      <SubscribeFormWrap>
        <Form
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
        >
          <InputArea>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Icon />
          </InputArea>
          <Button type="submit">Subscribe</Button>
        </Form>
      </SubscribeFormWrap>
    </SubscribeWrap>
  );
};

export default SubscribeForm;
