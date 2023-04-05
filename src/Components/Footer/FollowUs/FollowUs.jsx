import React from "react";
import styled, { useTheme } from "styled-components";

import { ReactComponent as Facebook } from "../../../assets/svg/FollowUsIcons/facebook.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/FollowUsIcons/youTube.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/FollowUsIcons/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/FollowUsIcons/instagram.svg";

const FollowUs = ({ text }) => {
  const theme = useTheme();
  return (
    <SocialLinks>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook width="18" height="18" fill={theme.colors.socialIconColor} />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube width="19" height="14" fill={theme.colors.socialIconColor} />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter width="18" height="14" fill={theme.colors.socialIconColor} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram width="17" height="17" fill={theme.colors.socialIconColor} />
      </a>
    </SocialLinks>
  );
};

const SocialLinks = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 46px;

  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 36px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export default FollowUs;
