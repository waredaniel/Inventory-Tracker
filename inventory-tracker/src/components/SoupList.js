import React from "react";
import Soup from "./Soup";
import PropTypes from "prop-types";


function SoupList(props) {

    return (
      <React.Fragment>
        <div>
          {props.soupList.map((soup) =>
          <Soup 
          whenSoupClicked = { props.onSoupSelection }
          decrementStock = {props.onClick }
          name={soup.name}
          origin={soup.origin}
          price={soup.price}
          stock={soup.stock}
          description={soup.description}
          id={soup.id}
          key={soup.id}/>
          )}
        </div> 
      </React.Fragment>
    );
  }

  SoupList.propTypes = {
    soupList: PropTypes.array,
    onSoupSelection: PropTypes.func
  };

export default SoupList;