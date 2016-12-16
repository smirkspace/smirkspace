import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import Button from '../SpaceButton';
import Blurb from '../BlurbModal';

import './index.css';


export class Modal extends React.Component {
  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) { return null; }

    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '99',
    };

    const backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '98',
      background: '#98a4b7',
    };

    if (this.props.backdropStyle) {
      for (const key in this.props.backdropStyle) {
        backdropStyle[key] = this.props.backdropStyle[key];
      }
    }

<<<<<<< HEAD
      return (
        <div className="container-fluid">
          <div className='modal-content' style={modalStyle}>
            {this.props.children}
	          <div className="modal-footer">
				<Link to={'/space/' + this.props.clickedButton} > <input type='submit' className='btn btn-secondary'value="Join Room" /> </Link>
				<button type="button" className="btn btn-primary" onClick={e => this.close(e)}> Close </button>
			  </div>
=======
    return (
      <div className="container-fluid">
        <div className="modal-content" style={modalStyle}>
          {this.props.children}
          <div className="modal-footer">
            <Link to={`/space/${this.props.clickedButton}`} > <button type="button" className="btn btn-secondary">Join Room</button> </Link>
            <button type="button" className="btn btn-primary" onClick={e => this.close(e)}> Close </button>
>>>>>>> b5f7e2771f842e3b90a7252bcfb537695e26c44a
          </div>
        </div>
      </div>
    );
  }

  }

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      clickedButton: 'some button',
    };
  }

  onButtonClick(someButton) {
    this.setState({
      isModalOpen: true,
      clickedButton: someButton,
    });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
          clickedButton={this.state.clickedButton}
        >
          <Blurb name={Meteor.user().username} />
        </Modal>
        <div className="buttonGrid">
          <div><Button source="images/random-chat.jpg" spaceIsDeployed="true" buttonName="random" handleClick={() => this.onButtonClick('random')} /></div>
          <div><Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" handleClick={() => this.onButtonClick('travel')} /></div>
          <div><Button source="images/donald-trump.jpg" spaceIsDeployed="true" buttonName="donald-trump" handleClick={() => this.onButtonClick('(President)Trump')} /></div>
          <div><Button source="images/someone-to-talk-to.jpg" spaceIsDeployed="true" buttonName="someone-to-talk-to" handleClick={() => this.onButtonClick('Anything')} /></div>
          <div><Button source="images/life-at-uvic.jpg" spaceIsDeployed="true" buttonName="uvic" handleClick={() => this.onButtonClick('UVIC!')} /></div>
          <div><Button source="images/workout.jpg" buttonName="fitness" /></div>
          <div><Button source="images/LGBT.jpg" buttonName="lgbt" /></div>
          <div><Button source="images/Parenting.jpg" spaceIsDeployed="true" buttonName="parenting" handleClick={() => this.onButtonClick('parenting')} /></div>
          <div><Button source="images/canadian-politics.jpg" spaceIsDeployed="true" buttonName="canadian-politics" handleClick={() => this.onButtonClick('Canadian Politics')} /></div>
          <div><Button source="images/movies-and-television.jpg" spaceIsDeployed="true" buttonName="movies-and-television" handleClick={() => this.onButtonClick('movies+television')} /></div>
          <div><Button source="images/music-listening.jpg" buttonName="music-listening" /></div>
          <div><Button source="images/music-playing.jpg" buttonName="music-playing" /></div>
          <div><Button source="images/esl.jpg" buttonName="esl" /></div>
          <div><Button source="images/language-partner-chinese.jpg" buttonName="chinese" /></div>
          <div><Button source="images/language-partner-french.jpg" buttonName="french" /></div>
          <div><Button source="images/motorcycles.jpg" buttonName="motorcycles" /></div>
          <div><Button source="images/esports.jpg" spaceIsDeployed="true" buttonName="esports" handleClick={() => this.onButtonClick('esports')} /></div>
          <div><Button source="images/memes.jpg" buttonName="memes" /></div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  backdropStyle: PropTypes.string,
  children: PropTypes.object,
  clickedButton: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
