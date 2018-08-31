import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateType } from "../reducers/view";
import { withRouter } from "react-router";

const iconReference = {
  generell: "comment-dots",
  arkiv: "archive",
  bistand: "hands-helping",
  forsikring: "car-crash",
  forsvar: "fighter-jet",
  helse: "heart",
  klima: "leaf",
  bygg: "building",
  mat: "utensils",
  universitet: "graduation-cap"
};

const displayText = {
  generell: "Generell svada",
  arkiv: "Arkivsvada",
  bistand: "Bistandssvada",
  forsikring: "Forsikringssvada",
  forsvar: "Forsvarssvada",
  helse: "Helsesvada",
  klima: "Klimasvada",
  bygg: "Byggsvada",
  mat: "Matsvada",
  universitet: "Universitetssvada"
};

const Homepage = ({ types, updateType, history }) => {
  const typeButtons = types.map(type => (
    <Button
      key={type}
      text={displayText[type]}
      selected={false}
      onClick={() => {
        updateType(type);
        history.push("/ny-setning");
      }}
      iconName={iconReference[type]}
    />
  ));
  return (
    <div className="homepage">
      <div className="header-container">
        <div className="header">Ordflom</div>
        <FontAwesomeIcon className="header-icon" icon={"trademark"} />
      </div>
      <div className="description-text">
        Er du en pappskalle? Ønsker du likevel å framstå veltalende når du
        konverserer med andre? Dette er siden for deg! Ordflom&#8482; hjelper
        deg med å bygge et setningsvokabulær uten like.
      </div>
      <div className="instruction-text">
        Velg setningstype for å komme i gang. Lykke til!
      </div>
      <div className="home-page-button-group">{typeButtons}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateType: type => dispatch(updateType(type))
});

const mapStateToProps = state => ({
  types: Object.entries(state.svada).map(([type]) => type)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage)
);
