import React from "react";

import { useTheme } from "styled-components";

import {
  SocialList,
  SocialItem,
  Link,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
} from "./FollowUs.styled";

const FollowUs = ({ text }) => {
  const theme = useTheme();
  return (
    <SocialList>
      <SocialItem>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            width="18"
            height="18"
            fill={theme.colors.socialIconColor}
          />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon
            width="19"
            height="14"
            fill={theme.colors.socialIconColor}
          />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            width="18"
            height="14"
            fill={theme.colors.socialIconColor}
          />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            width="17"
            height="17"
            fill={theme.colors.socialIconColor}
          />
        </Link>
      </SocialItem>
    </SocialList>
  );
};

export default FollowUs;
