import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import { setSvada } from "./reducers/svada";
import { loadSvada } from "./utils/svadaLoader";
import Homepage from "./components/Homepage";

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
  faTrademark
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
        <Route path="/ny-setning" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
