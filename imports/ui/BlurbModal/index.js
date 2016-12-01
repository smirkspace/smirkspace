import React, { Component, PropTypes } from 'react';
import { } from 'meteor/meteor';


export default class Blurb extends React.Component{
	render() {
		return (
	        <div>
                <h4 > My name is {this.props.name} </h4>
                <h4 > I'm joining the { this.props.room } room because of ... </h4>
                 <form >
                  <textarea name="blurb" form="new-blurb" mask='Enter a blurb about yourself...' height="50" width="70"></textarea>
                </form>
	        </div>
	    );
	}
}

Blurb.propTypes = {
  name: PropTypes.string,
  blurb: PropTypes.string,
  room: PropTypes.string,
  username: PropTypes.string,
};

