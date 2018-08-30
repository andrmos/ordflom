import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import { setSvada } from "./reducers/svada";
import { loadSvada } from "./utils/svadaLoader";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFighterJet,
  faUtensils,
  faLeaf,
  faHeart,
  faArchive,
  faBuilding,
  faGraduationCap,
  faBriefcaseMedical,
  faHandsHelping,
  faCommentDots,
  faCarCrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFighterJet,
  faUtensils,
  faLeaf,
  faHeart,
  faArchive,
  faBuilding,
  faGraduationCap,
  faBriefcaseMedical,
  faHandsHelping,
  faCommentDots,
  faCarCrash
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
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
