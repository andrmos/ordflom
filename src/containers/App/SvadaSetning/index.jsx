import React from "react";
import { connect } from "react-redux";
import { clickWordInSentence } from "../../../reducers/view";

import SvadaWord from "./SvadaWord";

const SvadaSetning = ({ setning, currentLocation, clickWordInSentence }) => {
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
    <div className="svada-setning-container">
      <div className="svada-setning">
        {svadaSetning}
        {setning[6] !== "" ? <div className="dot" /> : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clickWordInSentence: wordIndex => dispatch(clickWordInSentence(wordIndex))
});

const mapStateToProps = state => ({
  setning: state.view.setning,
  currentLocation: state.view.currentLocation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SvadaSetning);
