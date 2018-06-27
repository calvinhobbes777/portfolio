import React, { Component } from "react";

import Bio from "./App/Bio";
import Portfolio from "./App/Portfolio";
import ProfileHeader from "./App/ProfileHeader";

class App extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <Bio />
        <Portfolio />
      </div>
    );
  }
}

export default App;
