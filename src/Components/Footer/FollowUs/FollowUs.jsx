import React from "react";
import {
  SocialList,
  SocialItem,
  Link,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
  FollowUsText,
} from "./FollowUs.styled";

const stylesOnAddRecipePage = {
  facebook: { width: "26px", height: "26px" },
  youtube: { width: "28px", height: "22px" },
  twitter: { width: "25px", height: "22px" },
  instagram: { width: "24px", height: "24px" },
};

const FollowUs = ({ text, onAddRecipePage }) => {
  return (
    <>
      <FollowUsText>{text ? text : null}</FollowUsText>

      <SocialList>
        <SocialItem>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              style={onAddRecipePage ? stylesOnAddRecipePage.facebook : null}
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
              style={onAddRecipePage ? stylesOnAddRecipePage.youtube : null}
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
              style={onAddRecipePage ? stylesOnAddRecipePage.twitter : null}
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
              style={onAddRecipePage ? stylesOnAddRecipePage.instagram : null}
            />
          </Link>
        </SocialItem>
      </SocialList>
    </>
  );
};

export default FollowUs;
