import React, { Component } from 'react';
import { Transition, Modal } from 'react-overlays';
import { } from 'meteor/meteor';

export default class Blurb extends React.Component{
	render() {
		return (
			<div>
				<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
				  Launch demo modal
				</button>

				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
				        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
				      </div>
				      <div className="modal-body">
				        ...
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
	 	);
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