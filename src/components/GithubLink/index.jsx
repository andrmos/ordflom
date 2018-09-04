import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./GithubLink.css";

const GithubLink = () => (
  <div className="credits-container">
    <div className="credits-label">Laget av André</div>
    <FontAwesomeIcon
      className="github-icon"
      size="2x"
      icon={["fab", "github"]}
    />
  </div>
);

export default GithubLink;
