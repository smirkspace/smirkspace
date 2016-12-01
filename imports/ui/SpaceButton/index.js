import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './index.css';
import { countHandler, Counters } from '../../api/CountersDbCollection';
import Blurb from '../BlurbModal';

export default class Button extends Component{

  constructor(props) {
      super(props)
        this.state = { 
          isModalOpen: false, 
          spaceIsDeployed: false,
        }
    }

  openModal(){
    this.openModal();

  }

  // Function to give alerts for buttons not yet made
  // And to incrememnt counters for fake doors
  spaceNotAvailable() {
    
    //call function within the CountersDbCollection file
    //will create a DB object if button is being clicked for the first time
    //or will update button count if the object already exists
    countHandler(props.buttonName);

    //print out a message to the user
    alert('This space is still being developed.\nCheck back soon!');
  }

  static buttonType = props.spaceIsDeployed
  ? (
    <Link to={'/space/' + props.buttonName}>
      <input type="image" className="spaceButton" src={props.source} onClick= {openModal} />
    </Link>
    )
  : <input type="image" className="spaceButton" src={props.source} onClick={spaceNotAvailable} />

  render() {
    return buttonType;
  }
}

Button.propTypes = {
  spaceIsDeployed: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};