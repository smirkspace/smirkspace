import React, { Component } from 'react';
// import { Transition, Modal } from 'react-overlays';
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
        background: '#fff'
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
        background: '98a4b7',
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
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










// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			showModal: false,
// 		};
//   	}

// 	close() {
// 	    this.setState({ showModal: false });
// 	}

// 	open() {
// 	    this.setState({ showModal: true });
// 	}
	
// 	render () {
// 		return (
// 		<div className="container-fluid">
// 				<p> Click below </p>
// 				<button type="button" className="btn btn-default" onClick={this.open}> CLICK ME </button> 


// 			<Modal show={this.state.showModal} onHide={this.close}>
// 	          <Modal.Header closeButton>
// 	            <Modal.Title>Modal heading</Modal.Title>
// 	          	</Modal.Header>
// 	          	<Modal.Body>
// 	            	<h4>Text in a modal</h4>
// 	            	<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

// 	            	<h4>Popover in a modal</h4>
// 	            	<h4>Tooltips in a modal</h4>

// 	            	<h4>Overflowing text to show scroll behavior</h4>
// 	            	<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
// 	            	<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
// 	            	<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
// 	            	<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
// 	            	<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
// 	            	<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
// 	            	<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
// 	            	<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
// 	            	<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
// 	          	</Modal.Body>
// 	          	<Modal.Footer>
// 	            	<button type="button" className="btn btn-default" onClick={this.close}> Close </button>
// 	          	</Modal.Footer>
//         	</Modal>
//       	</div>
// 		);
// 	}
// };