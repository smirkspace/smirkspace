// imports/ui/Button/index.js
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './index.css';

export default class Button extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <input type="image" className="spaceButton" src={this.props.source} />
      </Link>
    );
  }
}

Button.propTypes = {
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
