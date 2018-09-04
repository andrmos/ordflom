import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./GithubLink.css";

const GithubLink = () => (
  <a
    className="credits-container"
    href="https://github.com/andrmos/ordflom"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="credits-label">Laget av André</div>
    <FontAwesomeIcon
      className="github-icon"
      size="2x"
      icon={["fab", "github"]}
    />
  </a>
);

export default GithubLink;
