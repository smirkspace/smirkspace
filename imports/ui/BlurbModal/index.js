import React, { Component, PropTypes } from 'react';
// import { Transition, Modal } from 'react-overlays';
// <button onClick={() => this.openModal()}>Open modal</button>
import { } from 'meteor/meteor';
// 18 <button onClick={() => this.openModal()}>Open modal</button>

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

                <div className="modal">
                  <div class="modal fade">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div className="modal-title"> My name is {this.props.name} </div>
                          <div className="modal-body modal-text"> I'm joining the { this.props.room } room because of ... </div>
          	               <form className='modal-body' >
                            <textarea name="blurb" form="new-blurb" mask='Enter a blurb about yourself...' height="50" width="70"></textarea>
                          </form>
          	             <h6> <button onClick={() => this.closeModal()}>Close</button> </h6>
                      </div>
                    </div>
                  </div>
                </div>
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
  room: PropTypes.string,
  username: PropTypes.string,
  clicked: PropTypes.boolean,
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
        zIndex: '9998',
        background: '#98a4b7',
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }

      return (
        <div>
          <div className='modal-container' style={modalStyle}>
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
