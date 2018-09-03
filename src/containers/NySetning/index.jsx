import React from "react";
import { connect } from "react-redux";

import "./NySetning.css";
import WordList from "./WordList";
import FinishedButtons from "./FinishedButtons";
import SvadaSetning from "./SvadaSetning";
import TypeButtons from "./TypeButtons";
import ChangeType from "./ChangeType";

const NySetning = ({ showFinishedButtons }) => (
  <div className="ny-setning">
    <ChangeType />
    <TypeButtons />
    <SvadaSetning />
    <WordList />
    {showFinishedButtons ? <FinishedButtons /> : null}
  </div>
);

const mapStateToProps = state => ({
  showFinishedButtons: state.view.currentLocation > 6
});

export default connect(mapStateToProps)(NySetning);
