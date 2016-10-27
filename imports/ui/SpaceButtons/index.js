// imports/ui/Button/index.js
import './index.css';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Button extends Component {
  render() {
    return(
      <input type='image' className='spaceButton' src='images/new_travel.jpg'/>
    );
  }
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
