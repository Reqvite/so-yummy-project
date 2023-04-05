import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
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

const SubscribeForm = () => {
  const user = useSelector(selectUser);

  const postSubscribe = async (value) => {
    try {
      const { data } = await axios.post(`/subscribe`, value);
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: user.email || "",
    },

    onSubmit: (values) => {
      postSubscribe({ email: values.email });
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
