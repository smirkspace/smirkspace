import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'react-router';
import Button from '../SpaceButton';

import './index.css';

export default class GridView extends Component {
	render() {
    	return(
    		<div>
	    		<table>
	    			<tr>
	    				<td><div className="travel_button"> <Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" /></div> </td>
						<td><div className="parenting_button"> <Button source="images/Parenting.jpg" buttonName="parenting" /></div> </td>
						<td><div className="insomnia_button"> <Button source="images/insomnia.png" buttonName="insomnia" /></div> </td>
	 				</tr>
	 				<tr>
	    				<td><div className="lgbt_button"> <Button source="images/LGBT.jpg" buttonName="lgbt" /></div> </td>
						<td><div className="fitness_button"> <Button source="images/workout.jpg" buttonName="fitness" /></div> </td>
						<td><div className="got_button">  <Button source="images/thrones.jpg" buttonName="got" /></div> </td>
	 				</tr>
	    		</table>
    		</div>


    	);
    }


}