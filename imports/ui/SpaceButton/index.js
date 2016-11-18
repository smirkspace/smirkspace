import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './index.css';

// Function to give alerts for buttons not yet made
// And to incrememnt counters for fake doors
function spaceNotAvailable() {
  alert('This space is still being developed.\nCheck back soon!');
  // increment counters collection here....
}

export default function Button(props) {
  const buttonType = props.link
  ? (
    <Link to={props.link}>
      <input type="image" className="spaceButton" src={props.source} />
    </Link>)
  : <input type="image" className="spaceButton" src={props.source} onClick={spaceNotAvailable} />;

  return buttonType;
}

Button.propTypes = {
  link: PropTypes.string,
  source: PropTypes.string.isRequired,
};
