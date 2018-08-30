import React, { Component } from "react";
import { connect } from "react-redux";
import { setSvadaWordCoordinates } from "../reducers/view";

class SvadaWord extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.updateOffset();
  }

  componentDidUpdate() {
    // Update the offset of the word at the current location
    if (this.props.currentLocation === this.props.index) {
      this.updateOffset();
    }
  }

  updateOffset = () => {
    this.props.setSvadaWordCoordinates(
      this.ref.current.offsetWidth,
      this.ref.current.offsetLeft
    );
  };

  render() {
    const { word, onClick, selected } = this.props;
    const className =
      word.length > 0
        ? selected
          ? "svada-word svada-word-selected"
          : "svada-word"
        : "svada-word not-assigned-word";
    return (
      <div
        ref={this.ref}
        className={className}
        key={word}
        onClick={() => {
          onClick();
          this.updateOffset();
        }}
      >
        {word}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSvadaWordCoordinates: (offsetWidth, offsetLeft) =>
    dispatch(setSvadaWordCoordinates(offsetWidth, offsetLeft))
});

export default connect(
  null,
  mapDispatchToProps
)(SvadaWord);
