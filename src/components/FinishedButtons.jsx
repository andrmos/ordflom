import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { resetSentence } from "../reducers/view";

const FinishedButtons = ({ resetSentence }) => (
  <div>
    <Button text="Ny" onClick={() => resetSentence()} />
    <Button
      text="Send til en bekjent"
      onClick={() => console.log("send til bekjent")}
    />
    <Button text="Kopier" onClick={() => console.log("kopier")} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  resetSentence: () => dispatch(resetSentence())
});

export default connect(
  null,
  mapDispatchToProps
)(FinishedButtons);
