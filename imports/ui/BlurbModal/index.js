import React, { Component, PropTypes } from 'react';
import { } from 'meteor/meteor';
//<button type='button' className='btn btn-secondary' onClick={() => this.closeModal()}>Close</button>

export default class Blurb extends React.Component{
	render() {
		return (
	        <div>
              <div className='modal-header'>
                <div className='modal-title'> 
                  <div className="modal-text"> Hello, {this.props.name}!</div>
                </div>
              </div>
              <div className='modal-body'>  
                  <div className='modal-text' id="modal-text"> Before you join this room...</div>
                  <div className='modal-text' id="modal-text" > Please enter a blurb about yourself below </div>
                <form >
                  <textarea name="blurb" form="new-blurb" mask='Enter a blurb about yourself...'> </textarea>
                </form>
              </div>

	        </div>
	    );
	}
}

Blurb.propTypes = {
  buttonName: PropTypes.string,
  username: PropTypes.string,
};

