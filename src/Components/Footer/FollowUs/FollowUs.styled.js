import styled from "styled-components";

import { ReactComponent as Facebook } from "../../../assets/svg/FollowUsIcons/facebook.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/FollowUsIcons/youTube.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/FollowUsIcons/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/FollowUsIcons/instagram.svg";

export const SocialList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 46px;
  justify-content: baseline;

  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 36px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;

export const FacebookIcon = styled(Facebook)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;

export const YoutubeIcon = styled(Youtube)`
  width: 19px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 15px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;

export const TwitterIcon = styled(Twitter)`
  width: 18px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;

export const InstagramIcon = styled(Instagram)`
  width: 17px;
  height: 17px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;
