import React, { Component } from "react";
import { connect } from "react-redux";
import { updateType } from "../../../reducers/view";

import "./ChangeType.css";
import Button from "../../../components/Button";

// TODO: Move to utils
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

class ChangeType extends Component {
  state = {
    displayTypes: false
  };

  render() {
    const { types, selectedType, updateType } = this.props;
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
      <div>
        <div onClick={() => this.setState({ displayTypes: true })}>
          <div className="button-line" />
          <div className="button-line" />
          <div className="button-line" />
        </div>

        {this.state.displayTypes ? typeButtons : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  types: Object.entries(state.svada).map(([type]) => type),
  selectedType: state.view.selectedType
});

const mapDispatchToProps = dispatch => ({
  updateType: type => dispatch(updateType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeType);
