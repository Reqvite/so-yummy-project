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
  FacebookIconAddRecipe,
  YoutubeIconAddRecipe,
  TwitterIconAddRecipe,
  InstagramIconAddRecipe,
} from "./FollowUs.styled";

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
            {onAddRecipePage ? <FacebookIconAddRecipe /> : <FacebookIcon />}
          </Link>
        </SocialItem>

        <SocialItem>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {onAddRecipePage ? <YoutubeIconAddRecipe /> : <YoutubeIcon />}
          </Link>
        </SocialItem>

        <SocialItem>
          <Link
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {onAddRecipePage ? <TwitterIconAddRecipe /> : <TwitterIcon />}
          </Link>
        </SocialItem>

        <SocialItem>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {onAddRecipePage ? <InstagramIconAddRecipe /> : <InstagramIcon />}
          </Link>
        </SocialItem>
      </SocialList>
    </>
  );
};

export default FollowUs;
