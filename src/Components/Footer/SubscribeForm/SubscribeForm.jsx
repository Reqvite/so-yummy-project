import React from "react";
import styled from "styled-components";

const SubscribeForm = () => {
  return (
    <SubscribeWrap>
      <Title>Subscribe to our Newsletter</Title>
      <Text>
        Subscribe to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Text>
      <SubscribeFormWrap>{"FooterForm"}</SubscribeFormWrap>
    </SubscribeWrap>
  );
};

const SubscribeWrap = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

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

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

const SubscribeFormWrap = styled.div`
  width: 204px;
  height: 84px;
`;

export default SubscribeForm;
