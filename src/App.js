import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <Navbar />
        <Form />
      </div>
    );
  }
}

export default App;
