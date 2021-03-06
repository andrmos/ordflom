import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./utils/registerServiceWorker";

import reducers from "./reducers";
import { setSvada } from "./reducers/svada";
import { loadSvada } from "./utils/svadaLoader";

import NySetning from "./containers/NySetning";
import Homepage from "./containers/Homepage";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFighterJet,
  faUtensils,
  faLeaf,
  faHeart,
  faArchive,
  faBuilding,
  faGraduationCap,
  faHandsHelping,
  faCommentDots,
  faCarCrash,
  faTrademark
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faFighterJet,
  faUtensils,
  faLeaf,
  faHeart,
  faArchive,
  faBuilding,
  faGraduationCap,
  faHandsHelping,
  faCommentDots,
  faCarCrash,
  faTrademark,
  faGithub
);

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

loadSvada(svada => {
  store.dispatch(setSvada(svada));
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/ny-setning" component={NySetning} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
