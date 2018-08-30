import React from "react";
import "./App.css";

import WordList from "../components/WordList";
import SvadaSetning from "../components/SvadaSetning";
import ButtonGroup from "../components/ButtonGroup";

const App = () => (
  <div className="App">
    <ButtonGroup />
    <SvadaSetning />
    <WordList />
  </div>
);

export default App;
