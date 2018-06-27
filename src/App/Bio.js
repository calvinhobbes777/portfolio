import React, { Component } from "react";
import glamorous from "glamorous";

class Bio extends Component {
  render() {
    return (
      <Box>
        <p>
          Hi my names Calvin Rafferty, Im from a small town in Idaho called
          Sandpoint. Im 25 years old I dont have kids yet but i do have a boston
          terrier he's the best dog ever.
        </p>
        <p>
          My brother in law got me interested in computer programming so I
          dabbled in coding for a couple months, then my life got turned around
          and decided that i had nothing to lose and went to a 3 month full time
          bootcamp where i learned both front and back end development.
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
