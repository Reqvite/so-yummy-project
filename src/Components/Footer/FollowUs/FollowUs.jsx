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
          <FacebookIcon width="18" height="18" />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon width="19" height="14" />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon width="18" height="14" />
        </Link>
      </SocialItem>

      <SocialItem>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon width="17" height="17" />
        </Link>
      </SocialItem>
    </SocialList>
  );
};

export default FollowUs;
