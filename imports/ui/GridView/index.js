import React, { Component } from 'react';
import { } from 'react-router';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import Button from '../SpaceButton';
import Blurb from '../BlurbModal';


import './index.css';


class Modal extends React.Component {

	render() {
      if (this.props.isOpen === false)
        return null

      let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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

	  return (
	    <div>
	      <div className="buttonGrid">
			     <Modal buttonName="random" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
					   <Blurb name= {Meteor.user().username} />
				</Modal>
	        <div><Button source="images/random-chat.jpg" spaceIsDeployed="true" buttonName="random" handleClick={() => this.onButtonClick()}/></div>

	        <div><Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" handleClick={() => this.onButtonClick()}/></div>

	        <div><Button source="images/donald-trump.jpg" spaceIsDeployed="true" buttonName="donald-trump" /></div>
	        <div><Button source="images/someone-to-talk-to.jpg" spaceIsDeployed="true" buttonName="someone-to-talk-to" /></div>
	        <div><Button source="images/life-at-uvic.jpg" spaceIsDeployed="true" buttonName="uvic" /></div>
	        <div><Button source="images/workout.jpg" buttonName="fitness" /></div>
	        <div><Button source="images/LGBT.jpg" buttonName="lgbt" /></div>
	        <div><Button source="images/Parenting.jpg" spaceIsDeployed="true" buttonName="parenting" /></div>
	        <div><Button source="images/canadian-politics.jpg" spaceIsDeployed="true" buttonName="canadian-politics" /></div>
	        <div><Button source="images/movies-and-television.jpg" spaceIsDeployed="true" buttonName="movies-and-television" /></div>
	        <div><Button source="images/music-listening.jpg" buttonName="music-listening" /></div>
	        <div><Button source="images/music-playing.jpg" buttonName="music-playing" /></div>
	        <div><Button source="images/esl.jpg" buttonName="esl" /></div>
	        <div><Button source="images/language-partner-chinese.jpg" buttonName="chinese" /></div>
	        <div><Button source="images/language-partner-french.jpg" buttonName="french" /></div>
	        <div><Button source="images/motorcycles.jpg" buttonName="motorcycles" /></div>
	        <div><Button source="images/esports.jpg" spaceIsDeployed="true" buttonName="esports" /></div>
	        <div><Button source="images/memes.jpg" buttonName="memes" /></div>
	      </div>
	    </div>
	  );
	}
}
