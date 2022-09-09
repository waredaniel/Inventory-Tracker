import React from "react";
import PropTypes from "prop-types";


function Soup(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSoupClicked(props.id)}>
        <h3>{props.name} - {props.price}</h3>
        <h5>{props.origin}</h5>
        <h5>{props.description}</h5>
      </div>
    </React.Fragment>
  );
}

Soup.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.number,
  id: PropTypes.string,
  whenSoupClicked: PropTypes.func
};

export default Soup;