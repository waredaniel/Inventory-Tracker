import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Name' />
         <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <textarea
          name='description'
          placeholder='Description of Soup.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;