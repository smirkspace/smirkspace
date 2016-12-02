import React, { PropTypes } from 'react';
import { } from 'meteor/meteor';

export default function Blurb(props) {
  return (
    <div>
      <div className="modal-header">
        <div className="modal-title">
          <div className="modal-text">Hello, {props.name}!</div>
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-text" id="modal-text">Before you join this room...</div>
        <div className="modal-text" id="modal-text">Please enter a blurb about yourself below</div>
        <form >
          <textarea rows="4" cols="40" />
        </form>
      </div>
    </div>
  );
}

Blurb.propTypes = {
  name: PropTypes.string,
};
