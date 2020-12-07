import React from "react";
import "./list.css";

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          id="nieuwItem"
          type="text"
          name="nieuwItem"
          placeholder="Voeg item toe"
        />
        <button id="toevoegKnop" onClick={this.props.voegItemToe}>
          Klik om item toe te voegen
        </button>
      </div>
    );
  }
}

export default InputField;
