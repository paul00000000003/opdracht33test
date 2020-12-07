import React from "react";
import "./list.css";

class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li
        className={this.props.className}
        onClick={(e) => this.props.clickItem(this.props.item.id)}
      >
        {this.props.item.titel}

        {this.props.item.amount !== 1 ? (
          <span> Hoeveelheid : {this.props.item.amount}</span>
        ) : (
          <span></span>
        )}
      </li>
    );
  }
}

export default ListItem;
