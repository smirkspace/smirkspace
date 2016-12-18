import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { percentInSpace } from '../../api/ConversationsDbCollection';

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
    return (
      <div className="container-fluid">
        <div className="modal-content" style={modalStyle}>
          {this.props.children}
          <div className="modal-footer">
            <Link to={`/space/${this.props.clickedButton}`} > <input type="submit" className="btn btn-secondary"value="Join Room" /> </Link>
            <button type="button" className="btn btn-primary" onClick={e => this.close(e)}> Close </button>
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
          <div className="gridDiv">
            <Button source="images/random-chat.jpg" spaceIsDeployed="true" buttonName="random" handleClick={() => this.onButtonClick('random')} />
            <p className="population"> {percentInSpace('random')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" handleClick={() => this.onButtonClick('travel')} />
            <p className="population"> {percentInSpace('travel')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/donald-trump.jpg" spaceIsDeployed="true" buttonName="donald-trump" handleClick={() => this.onButtonClick('donald-trump')} />
            <p className="population"> {percentInSpace('donald-trump')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/someone-to-talk-to.jpg" spaceIsDeployed="true" buttonName="someone-to-talk-to" handleClick={() => this.onButtonClick('someone-to-talk-to')} />
            <p className="population"> {percentInSpace('someone-to-talk-to')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/life-at-uvic.jpg" spaceIsDeployed="true" buttonName="uvic" handleClick={() => this.onButtonClick('uvic')} />
            <p className="population"> {percentInSpace('uvic')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/workout.jpg" buttonName="fitness" />
            <p className="population"> {percentInSpace('fitness')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/LGBT.jpg" buttonName="lgbt" />
            <p className="population"> {percentInSpace('lgbt')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/Parenting.jpg" spaceIsDeployed="true" buttonName="parenting" handleClick={() => this.onButtonClick('parenting')} />
            <p className="population"> {percentInSpace('parenting')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/canadian-politics.jpg" spaceIsDeployed="true" buttonName="canadian-politics" handleClick={() => this.onButtonClick('canadian-politics')} />
            <p className="population"> {percentInSpace('canadian-politics')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/movies-and-television.jpg" spaceIsDeployed="true" buttonName="movies-and-television" handleClick={() => this.onButtonClick('movies-and-television')} />
            <p className="population"> {percentInSpace('movies-and-television')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/music-listening.jpg" buttonName="music-listening" />
            <p className="population"> {percentInSpace('music-listening')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/music-playing.jpg" buttonName="music-playing" />
            <p className="population"> {percentInSpace('music-playing')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/esl.jpg" buttonName="esl" />
            <p className="population"> {percentInSpace('esl')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/language-partner-chinese.jpg" buttonName="chinese" />
            <p className="population"> {percentInSpace('chinese')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/language-partner-french.jpg" buttonName="french" />
            <p className="population"> {percentInSpace('french')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/motorcycles.jpg" buttonName="motorcycles" />
            <p className="population"> {percentInSpace('motorcycles')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/esports.jpg" spaceIsDeployed="true" buttonName="esports" handleClick={() => this.onButtonClick('esports')} />
            <p className="population"> {percentInSpace('esports')} </p>
          </div>
          <div className="gridDiv">
            <Button source="images/memes.jpg" spaceIsDeployed="true" buttonName="memes" handleClick={() => this.onButtonClick('memes')} />
            <p className="population"> {percentInSpace('memes')} </p>
          </div>
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
