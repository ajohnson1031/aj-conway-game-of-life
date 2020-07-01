import React, { Component } from "react";

class Cell extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.storeCell(this.props.position)}
        className={this.props.live ? "live-cell" : "dead-cell"}
      ></div>
    );
  }
}

export default Cell;
