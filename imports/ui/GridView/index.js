import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'react-router';
import { Link } from 'react-router';

import Button from '../SpaceButton';
import Blurb from '../BlurbModal';


import './index.css';

export default class GridView extends Component {
	constructor(props) {
      super(props)
      	this.state = { 
      		isModalOpen: false,
      	}
    }

  openModal() {
      this.setState({ isModalOpen: true })
  }

  closeModal() {
      this.setState({ isModalOpen: false })
  }


  onButtonClick() {
    this.setState({
      isModalOpen: true,
    });
  }

	render() {
    	return(
    		<div>
	    		<table>
	    			<tbody>
		    			<tr>
		    				<td><div className="travel_button"> <Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" handleClick={() => this.onButtonClick()}/>
		    						<Modal buttonName="travel" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
		    							<Blurb name="username" room="Travel" />

		    						</Modal>
		    					</div>
		    				 </td>
							<td><div className="parenting_button"> <Button source="images/Parenting.jpg" buttonName="parenting" /></div> </td>
							<td><div className="insomnia_button"> <Button source="images/insomnia.png" buttonName="insomnia" /></div> </td>
		 				</tr>
		 				<tr>
		    				<td><div className="lgbt_button"> <Button source="images/LGBT.jpg" buttonName="lgbt" /></div> </td>
							<td><div className="fitness_button"> <Button source="images/workout.jpg" buttonName="fitness" /></div> </td>
							<td><div className="got_button">  <Button source="images/thrones.jpg" buttonName="got" /></div> </td>
		 				</tr>
		 			</tbody>
	    		</table>
    		</div>


    	);
    }
}



class Modal extends React.Component {

	render() {
      if (this.props.isOpen === false)
        return null

      let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -80%)',
        zIndex: '99',
      }

      let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '98',
        background: '#98a4b7',
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }

      return (
        <div className="container-fluid">
          <div className='modal-content' style={modalStyle}>
            {this.props.children}
			<Link to={'/space/' + this.props.buttonName} > <button type='button' className='btn btn-secondary'>Join Room</button> </Link>
          </div>
        </div>
      );
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }

