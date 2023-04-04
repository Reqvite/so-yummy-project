import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import { ReactComponent as MailIcon } from "../../../assets/svg/MailIcon/mailIcon.svg";

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

const SubscribeWrap = styled.div`
  @media screen and (min-width: 1440px) {
    width: 339px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  margin-bottom: 14px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  letter-spacing: -0.02em;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

const SubscribeFormWrap = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    gap: 16px;
    flex-direction: column;
  }
`;

const InputArea = styled.div`
  position: relative;
`;

const Icon = styled(MailIcon)`
  position: absolute;
  top: 35%;
  left: 14px;
  stroke: var(--whiteColor);
  opacity: 0.8;
  width: 16px;
  height: 12px;

  @media screen and (min-width: 768px) {
    top: 35%;
    left: 15px;
    width: 20px;
    height: 16px;
  }
`;

const Input = styled.input`
  display: inline-block;
  padding: 11px 42px;
  width: 204px;
  height: 38px;
  position: relative;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  background-color: transparent;
  color: ${(p) => p.theme.colors.footerText};
  border: 1px solid ${(p) => p.theme.colors.footerText};
  border-radius: 6px;

  ::placeholder {
    letter-spacing: -0.02em;
    font-weight: 400;
    font-size: 10px;
    font-style: normal;
    line-height: 1.5;
    text-transform: none;
    color: ${(p) => p.theme.colors.footerText};

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width: 259px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 338px;
    height: 60px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 204px;
  height: 38px;
  background: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.footerText};
  border: none;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: color 0.5s;

  :hover {
    color: ${(p) => p.theme.colors.darkText};
  }
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
  }
`;

export default SubscribeForm;
