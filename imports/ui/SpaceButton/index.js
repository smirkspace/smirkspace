import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './index.css';

export default function Button(props) {
  return (
    <Link to={props.link}>
      <input type="image" className="spaceButton" src={props.source} />
    </Link>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};
