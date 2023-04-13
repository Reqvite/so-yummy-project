import styled from "styled-components";

import { ReactComponent as Facebook } from "../../../assets/svg/FollowUsIcons/facebook.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/FollowUsIcons/youTube.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/FollowUsIcons/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/FollowUsIcons/instagram.svg";

export const FollowUsText = styled.h3`
  color: ${(p) => p.theme.colors.followUsTitle};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  line-height: 1;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 46px;
  justify-content: baseline;

  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 36px;
    gap: 23px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
    gap: 20px;
    padding-left: 0px;
    padding-right: 0px;
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
  transition: 250ms;
  fill: ${(p) => p.theme.colors.socialIconColor};

  :hover {
    fill: ${(p) => p.theme.colors.socialIconHover};
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const YoutubeIcon = styled(Youtube)`
  width: 19px;
  height: 14px;
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHover};
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 15px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;

export const TwitterIcon = styled(Twitter)`
  width: 18px;
  height: 14px;
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHover};
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;

export const InstagramIcon = styled(Instagram)`
  width: 17px;
  height: 17px;
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHover};
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  fill: ${(p) => p.theme.colors.socialIconColor};
`;

export const FacebookIconAddRecipe = styled(Facebook)`
  width: 26px;
  height: 26px;
  fill: ${(p) => p.theme.colors.socialIconColor};
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHoverAdd};
  }
`;
export const YoutubeIconAddRecipe = styled(Youtube)`
  width: 28px;
  height: 22px;
  fill: ${(p) => p.theme.colors.socialIconColor};
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHoverAdd};
  }
`;

export const TwitterIconAddRecipe = styled(Twitter)`
  width: 25px;
  height: 22px;
  fill: ${(p) => p.theme.colors.socialIconColor};
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHoverAdd};
  }
`;

export const InstagramIconAddRecipe = styled(Instagram)`
  width: 24px;
  height: 24px;
  fill: ${(p) => p.theme.colors.socialIconColor};
  transition: 250ms;
  :hover {
    fill: ${(p) => p.theme.colors.socialIconHoverAdd};
  }
`;
