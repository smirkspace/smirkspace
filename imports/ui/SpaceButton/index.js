import React, { PropTypes } from 'react';
import './index.css';
import { countHandler } from '../../api/CountersDbCollection';
import { percentInSpace } from '../../api/ConversationsDbCollection';
// <Link to={'/space/' + props.buttonName}>

export default function Button(props) {
  // Function to give alerts for buttons not yet made
  // And to incrememnt counters for fake doors

  function openModal() {
    props.handleClick();
  }

  function spaceNotAvailable() {
    // call function within the CountersDbCollection file
    // will create a DB object if button is being clicked for the first time
    // or will update button count if the object already exists
    countHandler(props.buttonName);

    // print out a message to the user
    alert('This space is still being developed.\nCheck back soon!');
  }

  function findPercent() {
    return percentInSpace(props.buttonName);
  }

  const buttonType = props.spaceIsDeployed
  ? (
    <input type="image" className="spaceButton" src={props.source} onClick={openModal} />
    )
  : (
    <input type="image" className="spaceButton" src={props.source} onClick={spaceNotAvailable} />
    );

  return buttonType;
}

Button.propTypes = {
  spaceIsDeployed: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
