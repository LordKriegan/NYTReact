import React, { Component } from 'react';
import Titlebar from "./components/Titlebar";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Wrapper />
      </div>
    );
  }
}

export default App;
