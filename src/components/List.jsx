import React from "react";

//import ListItem from "./ListItem";
//import Mandje from "./Mandje";
import "./list.css";
//import InputField from "./InputField";

let waarde = "";
let refid = 0;

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
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
