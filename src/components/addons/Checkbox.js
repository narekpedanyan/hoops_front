import React, { Component } from "react";
import ReactDOM from "react-dom";

class Checkbox extends Component {
  render() {
    const { item, isChecked } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          value={item.id}
          checked={isChecked}
          onChange={this.props.handleCheckboxClick}
        />
        {item.name}
      </div>
    );
  }
}
