import React, { Component } from "react";

import "./ChangeType.css";

class ChangeType extends Component {
  state = {
    displayTypes: false
  };

  render() {
    const typeViews = <div>Types!</div>;
    return (
      <div>
        <div onClick={() => this.setState({ displayTypes: true })}>
          <div className="button-line" />
          <div className="button-line" />
          <div className="button-line" />
        </div>

        {this.state.displayTypes ? typeViews : null}
      </div>
    );
  }
}

export default ChangeType;
