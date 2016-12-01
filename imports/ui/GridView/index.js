import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'react-router';

import Button from '../SpaceButton';
import Blurb from '../BlurbModal';


import './index.css';

export default class GridView extends Component {
	constructor(props) {
      super(props)
      	this.state = { 
      		isModalOpen: false,
      	}
      // this._onButtonClick = this._onButtonClick.bind(this);
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
		    						<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
		    							<Blurb />
		    							<h6> <button onClick={() => this.closeModal()}>Close</button> </h6>
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
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '99',
        background: '#f7faff',
      }

      if (this.props.width && this.props.height) {
        modalStyle.width = this.props.width + 'px'
        modalStyle.height = this.props.height + 'px'
        modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
        modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
        modalStyle.transform = null
      }

      if (this.props.style) {
        for (let key in this.props.style) {
          modalStyle[key] = this.props.style[key]
        }
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
        <div className={this.props.containerClassName}>
          <div className='intro' style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
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