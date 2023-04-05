import React from "react";

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
  return (
    <SocialList>
      <SocialItem>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Link>
      </SocialItem>
    </SocialList>
  );
};

export default FollowUs;
