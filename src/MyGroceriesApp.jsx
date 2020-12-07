import React from "react";
import List from "./components/List";

class MyGroceriesApp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default MyGroceriesApp;
