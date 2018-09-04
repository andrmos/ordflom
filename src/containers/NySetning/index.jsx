import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NySetning.css";
import WordList from "./WordList";
import FinishedButtons from "./FinishedButtons";
import SvadaSetning from "./SvadaSetning";
import ChangeType from "./ChangeType";
import GithubLink from "../../components/GithubLink";

const NySetning = ({ showFinishedButtons, history }) => (
  <div className="ny-setning">
    <div className="header-container">
      <div className="title-container" onClick={() => history.push("/")}>
        <div className="title">Ordflom</div>
        <FontAwesomeIcon className="title-icon" icon={"trademark"} />
      </div>
      <ChangeType />
    </div>
    <SvadaSetning />
    <WordList />
    {showFinishedButtons ? <FinishedButtons /> : null}
    <GithubLink />
  </div>
);

const mapStateToProps = state => ({
  showFinishedButtons: state.view.currentLocation > 6
});

export default withRouter(connect(mapStateToProps)(NySetning));
