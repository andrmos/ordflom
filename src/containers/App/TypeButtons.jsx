import React from "react";
import { connect } from "react-redux";
import { updateType } from "../../reducers/view";

import Button from "../../components/Button";

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

const ButtonGroup = ({ types, selectedType, updateType }) => {
  const typeButtons = types.map(type => (
    <Button
      key={type}
      text={displayText[type]}
      selected={selectedType === type}
      onClick={() => updateType(type)}
      iconName={iconReference[type]}
    />
  ));

  return (
    <div className="button-group-container">
      <div className="button-group">{typeButtons}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateType: type => dispatch(updateType(type))
});

const mapStateToProps = state => ({
  types: Object.entries(state.svada).map(([type]) => type),
  selectedType: state.view.selectedType
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonGroup);
