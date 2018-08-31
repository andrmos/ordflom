import React, { Component } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { resetSentence } from "../reducers/view";
import { CopyToClipboard } from "react-copy-to-clipboard";

class FinishedButtons extends Component {
  state = {
    copiedText: "Kopier til utklippstavle"
  };

  render() {
    const { sentenceToCopty, resetSentence } = this.props;
    return (
      <div className="finished-buttons">
        <Button text="Lag ny setning" onClick={() => resetSentence()} />
        <CopyToClipboard
          text={sentenceToCopty}
          onCopy={() =>
            setTimeout(
              () => this.setState({ copiedText: "Setningen er kopiert!" }),
              400
            )
          }
        >
          <Button text={this.state.copiedText} />
        </CopyToClipboard>
      </div>
    );
  }
}

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
