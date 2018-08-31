import React from "react";
import { connect } from "react-redux";

import "./App.css";
import WordList from "../components/WordList";
import SvadaSetning from "../components/SvadaSetning";
import ButtonGroup from "../components/ButtonGroup";
import FinishedButtons from "../components/FinishedButtons";

const App = ({ showFinishedButtons }) => (
  <div className="App">
    <ButtonGroup />
    <SvadaSetning />
    <WordList />
    {showFinishedButtons ? <FinishedButtons /> : null}
  </div>
);

const mapStateToProps = state => ({
  showFinishedButtons: state.view.currentLocation > 6
});

export default connect(mapStateToProps)(App);
