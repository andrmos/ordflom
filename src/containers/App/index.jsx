import React from "react";
import { connect } from "react-redux";

import "./App.css";
import WordList from "./WordList";
import FinishedButtons from "./FinishedButtons";
import SvadaSetning from "./SvadaSetning";
import TypeButtons from "./TypeButtons";

const App = ({ showFinishedButtons }) => (
  <div className="App">
    <TypeButtons />
    <SvadaSetning />
    <WordList />
    {showFinishedButtons ? <FinishedButtons /> : null}
  </div>
);

const mapStateToProps = state => ({
  showFinishedButtons: state.view.currentLocation > 6
});

export default connect(mapStateToProps)(App);
