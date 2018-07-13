import React, { Component } from "react";
import glamorous from "glamorous";

class Bio extends Component {
  render() {
    return (
      <Box>
        <p>
          Hi my names Calvin Rafferty, Im from a small town in Idaho called
          Sandpoint. Im 26 years old I dont have kids yet but i do have a boston
          terrier he's the best dog ever.
        </p>
        <p>
          My brother in law got me interested in computer programming so I
          dabbled in coding for a couple months, then my life got turned around
          and decided that i had nothing to lose and went to a 3 month full time
          bootcamp.
        </p>
        <p>
          During the course, I received hands-on experience creating and
          implementing software applications and developed the ability to
          troubleshoot and solve problems in a timely and accurate manner. I
          believe continuous learning and self-improvement is the key to being a
          successful software engineer, that is why I strive to always learn
          from others and hone my craft through continual research,
          experimentation with new software technology and methods to assist
          with product development.
        </p>
        <p>
          Now i am currently doing a paid internship at Devtree
          school/consulting. I am a fast learner and have good time management
          skills and work great with a team of individuals.
        </p>
        <p>
          If you'd like to get in touch with me go ahead and send me an{" "}
          <a
            style={{
              color: "black"
            }}
            href="mailto:calvinhobbes352@gmail.com"
          >
            email
          </a>{" "}
          or get in touch with me on social media. Also here's my{" "}
          <a
            style={{
              color: "black"
            }}
            href="/Calvin's Resume.pdf"
          >
            resume.
          </a>
        </p>
      </Box>
    );
  }
}

const Box = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "500px",
  margin: "0px auto"
});
export default Bio;
