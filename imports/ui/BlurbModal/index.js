import React, { Component, PropTypes } from 'react';
// import { Transition, Modal } from 'react-overlays';
// <button onClick={() => this.openModal()}>Open modal</button>
import { } from 'meteor/meteor';

export default class Blurb extends React.Component{
	constructor(props) {
      super(props)
      	this.state = { 
      		isModalOpen: false 
      	}
    }

	render() {
		return (
	        <div>
	        <button onClick={() => this.openModal()}>Open modal</button>
	          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
	            <h1> Modal title</h1>
	            <p> hello</p>
	            <p> {this.props.blurb} </p>
	            <p> <button onClick={() => this.closeModal()}>Close</button></p>
	          </Modal>
	        </div>
	    );
	}

	openModal() {
      this.setState({ isModalOpen: true })
    }

  closeModal() {
      this.setState({ isModalOpen: false })
    }
}

Blurb.propTypes = {
  blurb: PropTypes.string,
};

class Modal extends React.Component {

	render() {
      if (this.props.isOpen === false)
        return null

      let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#3477e2'
      }

      // if (this.props.width && this.props.height) {
      //   modalStyle.width = this.props.width + 'px'
      //   modalStyle.height = this.props.height + 'px'
      //   modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
      //   modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
      //   modalStyle.transform = null
      // }

      // if (this.props.style) {
      //   for (let key in this.props.style) {
      //     modalStyle[key] = this.props.style[key]
      //   }
      // }

      let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: '#98a4b7',
      }

      // if (this.props.backdropStyle) {
      //   for (let key in this.props.backdropStyle) {
      //     backdropStyle[key] = this.props.backdropStyle[key]
      //   }
      // }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={modalStyle}>
            {this.props.children}
          </div>
          <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }

}
