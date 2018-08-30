import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import WordList from "../components/WordList";
import SvadaSetning from "../components/SvadaSetning";
import ButtonGroup from "../components/ButtonGroup";

class App extends Component {
  render() {
    const {
      svada,
      selectedType,
      selectedWordIndices,
      currentLocation,
      currentWordOffset,
      svadaSetning
    } = this.props;

    return (
      <div className="App">
        <ButtonGroup />
        <SvadaSetning />

        <div className="lists">
          {svada[selectedType].map((words, index) => {
            const shouldFollowWordList = false;
            let style = {};
            if (shouldFollowWordList) {
              const offset = currentLocation >= svadaSetning.length;
              style = {
                left: offset
                  ? currentWordOffset.left + currentWordOffset.width
                  : currentWordOffset.left,
                position: "absolute"
              };
            } else {
              style = {};
            }
            return (
              <WordList
                style={style}
                key={index}
                words={words}
                locationInSentence={index}
                selectedWordIndex={selectedWordIndices[index]}
                visible={currentLocation === index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  svada: state.svada,
  selectedType: state.view.selectedType,
  selectedWordIndices: state.view.selectedWordIndices,
  currentLocation: state.view.currentLocation,
  currentWordOffset: state.view.currentWordOffset,
  svadaSetning: state.view.setning
});

export default connect(mapStateToProps)(App);
