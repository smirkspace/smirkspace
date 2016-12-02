import React, { Component, PropTypes } from 'react';
import { } from 'meteor/meteor';
//<button type='button' className='btn btn-secondary' onClick={() => this.closeModal()}>Close</button>

export default class Blurb extends React.Component{
	render() {
		return (
	        <div>
              <div className='modal-header'>
                <div className='modal-title'> 
                  <div className="modal-text"> My name is {this.props.name} </div>
                </div>
              </div>
              <div className='modal-body'>  
                  <div className='modal-text'> I'm joining this room because of ... </div>
                  <div className='modal-text'> Enter a blurb about yourself </div>
                <form >
                  <textarea name="blurb" form="new-blurb" mask='Enter a blurb about yourself...'> </textarea>
                </form>
              </div>

	        </div>
	    );
	}
}

Blurb.propTypes = {
  name: PropTypes.string,
  buttonName: PropTypes.string,
  username: PropTypes.string,
};

