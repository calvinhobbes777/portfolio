import React, { Component } from "react";
import glamorous from "glamorous";

class ProfileHeader extends Component {
  render() {
    return (
      <Box>
        <div>
          <Img src="/image/profile/PROFILE.jpg" alt="profile pic" />
        </div>
        <h1>Calvin Rafferty</h1>
        <HR />
        <h3>Junior Software Engineer</h3>
        <div>
          <a href="https://www.facebook.com/zombeard7">
            <Image src="/image/social/face.png" alt="facebook" />
          </a>
          <a href="https://github.com/calvinhobbes777">
            <Image src="/image/social/git.png" alt="github" />
          </a>
          <a href="https://www.instagram.com/calvinhobbes92/">
            <Image src="/image/social/inst.png" alt="instagram" />
          </a>
          <a href="https://twitter.com/zombeard777?lang=en">
            <Image src="/image/social/twit.png" alt="twitter" />
          </a>
        </div>
      </Box>
    );
  }
}

const Box = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "60px"
});

const Img = glamorous.img({
  width: "100%",
  maxWidth: "200px",
  borderRadius: "50px",
  boxShadow: " 0px 0px 40px 0px "
});

const HR = glamorous.hr({
  height: "5px",
  width: "100%",
  maxWidth: "500px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  border: "none",
  borderRadius: "10px"
});

const Image = glamorous.img({
  ":hover": {
    filter: "invert(100%)"
  }
});
export default ProfileHeader;
