import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { resetSentence } from "../reducers/view";
import { CopyToClipboard } from "react-copy-to-clipboard";

const FinishedButtons = ({ sentenceToCopty, resetSentence }) => (
  <div>
    <Button text="Ny" onClick={() => resetSentence()} />
    {sentenceToCopty}
    <CopyToClipboard
      text={sentenceToCopty}
      // todo: onCopy={() => this.setState({ copied: true })}
    >
      <Button text="Kopier" />
    </CopyToClipboard>
  </div>
);

const mapStateToProps = state => ({
  sentenceToCopty: state.view.setning.join(" ") + "."
});

const mapDispatchToProps = dispatch => ({
  resetSentence: () => dispatch(resetSentence())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishedButtons);
