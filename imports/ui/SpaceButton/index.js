// imports/ui/Button/index.js
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './index.css';

export default function Button() {
  return (
    <Link to={this.props.link}>
      <input type="image" className="spaceButton" src={this.props.source} />
    </Link>
  );
}

Button.propTypes = {
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
