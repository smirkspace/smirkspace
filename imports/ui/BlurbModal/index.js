import React, { Component, Button } from 'react';
import { Modal } from 'react-modal';
import { } from 'react-router';
import { } from 'meteor/meteor';


export default class Blurb extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
  	}

	close() {
	    this.setState({ showModal: false });
	}

	open() {
	    this.setState({ showModal: true });
	}
	
	render () {
		return (
			<div className="container-fluid">
				<p> Click below </p>
				< Button 
					bsStyle="primary"
					bsSize="large"
	      			onClick={this.open}
	      		>
	      				Launch demo modal
	    		</Button>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading </Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<h4>Please enter a blurb about yourself! </h4>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
};