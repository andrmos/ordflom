import React, { Component } from "react";
import { connect } from "react-redux";
import { clickWordInSentence, setSvadaWordCoordinates } from "../reducers/view";
import SvadaWord from "./SvadaWord";

class SvadaSetning extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.props.setSvadaWordCoordinates(0, this.ref.current.offsetLeft);
  }

  render() {
    const { setning, clickWordInSentence, currentLocation } = this.props;
    const svadaSetning = setning.map((word, index) => (
      <SvadaWord
        key={word + index}
        word={word}
        index={index}
        currentLocation={currentLocation}
        selected={currentLocation === index}
        onClick={() => clickWordInSentence(index)}
      />
    ));

    return (
      <div ref={this.ref} className="svada-setning">
        {svadaSetning}
        <div className="dot" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clickWordInSentence: wordIndex => dispatch(clickWordInSentence(wordIndex)),
  setSvadaWordCoordinates: (offsetWidth, offsetLeft) =>
    dispatch(setSvadaWordCoordinates(offsetWidth, offsetLeft))
});

const mapStateToProps = state => ({
  setning: state.view.setning,
  currentLocation: state.view.currentLocation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SvadaSetning);
