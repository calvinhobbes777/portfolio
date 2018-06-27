import React, { Component } from "react";
import glamorous from "glamorous";

class Portfolio extends Component {
  render() {
    return (
      <Box>
        <h2>My Work</h2>
        <HR />
        <Anchor href="http://devtree.consulting">Devtree Consulting</Anchor>

        <Anchor href="http://job-placement.surge.sh/">Job Placement App</Anchor>

        <Anchor href="http://beer-book.surge.sh">Beer Book</Anchor>

        <Anchor href="http://cars-r-us.surge.sh">Cars-R-Us</Anchor>
      </Box>
    );
  }
}

const Box = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const HR = glamorous.hr({
  height: "5px",
  width: "100%",
  maxWidth: "500px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  border: "none",
  borderRadius: "10px"
});

const Anchor = glamorous.a({
  padding: "10px",
  color: "black",
  fontSize: "20px",
  ":hover": {
    color: "violet"
  }
});
export default Portfolio;
