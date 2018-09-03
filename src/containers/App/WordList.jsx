import React from "react";
import { connect } from "react-redux";
import { selectWord } from "../../reducers/view";

import Word from "../../components/Word";

const WordList = ({ words, selectedWordIndex, selectWord }) =>
  words ? (
    <div className="word-list">
      {words.map((word, indexInList) => (
        <Word
          key={word + indexInList}
          word={word}
          selected={indexInList === selectedWordIndex}
          onClick={() => selectWord(word, indexInList)}
        />
      ))}
    </div>
  ) : null;

const mapDispatchToProps = dispatch => ({
  selectWord: (word, indexInList) => dispatch(selectWord(word, indexInList))
});

const mapStateToProps = state => ({
  words: state.svada[state.view.selectedType][state.view.currentLocation],
  selectedWordIndex: state.view.selectedWordIndices[state.view.currentLocation]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
