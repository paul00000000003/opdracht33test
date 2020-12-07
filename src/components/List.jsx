import React from "react";
import "./list.css";

class List extends React.Component {
  constructor() {
    super();
    this.state = { groceryItems: [] };
  }

  render() {
    return (
      <div>
        <h1 className="algBoodschap">Boodschappenlijst</h1>
      </div>
    );
  }
}

export default List;
