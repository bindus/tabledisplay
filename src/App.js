import React, { Component } from "react";
import "./App.scss";
import Table from "./components/Table/Table";


class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          ReactJS Dynamically add/remove items from Table
        </header>
        <Table />
      </div>
    );
  }
}
export default App;
