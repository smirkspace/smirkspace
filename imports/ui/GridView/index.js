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
                    <tbody>
    	    			<tr>
                            <td><div className="random_button"> <Button source="images/random-chat.jpg" spaceIsDeployed="true" buttonName="random" /></div> </td>
    	    				<td><div className="travel_button"> <Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" /></div> </td>
                            <td><div className="donald_trump_button"> <Button source="images/donald-trump.jpg" spaceIsDeployed="true" buttonName="donald-trump" /></div> </td>
    	 				</tr>
    	 				<tr>
                            <td><div className="someone_to_talk_to_button"> <Button source="images/someone-to-talk-to.jpg" spaceIsDeployed="true" buttonName="someone-to-talk-to" /></div> </td>
                            <td><div className="life_at_uvic_button"> <Button source="images/life-at-uvic.jpg" spaceIsDeployed="true" buttonName="uvic" /></div> </td>
    						<td><div className="fitness_button"> <Button source="images/workout.jpg" buttonName="fitness" /></div> </td>
    	 				</tr>
                        <tr>
                            <td><div className="lgbt_button"> <Button source="images/LGBT.jpg" buttonName="lgbt" /></div> </td>
                            <td><div className="parenting_button"> <Button source="images/Parenting.jpg" buttonName="parenting" /></div> </td>
                            <td><div className="canadian_politics_button"> <Button source="images/canadian-politics.jpg" spaceIsDeployed="true" buttonName="canadian-politics" /></div> </td>
                        </tr>
                        <tr>
                            <td><div className="movies_and_tv_button">  <Button source="images/movies-and-television.jpg" spaceIsDeployed="true" buttonName="movies-and-television" /></div> </td>
                            <td><div className="music_listening_button"> <Button source="images/music-listening.jpg" buttonName="music-listening" /></div> </td>
                            <td><div className="music_playing_button"> <Button source="images/music-playing.jpg" buttonName="music-playing" /></div> </td>
                        </tr>
                        <tr>
                            <td><div className="esl_button"> <Button source="images/esl.jpg" buttonName="esl" /></div> </td>
                            <td><div className="language_partner_chinese_button"> <Button source="images/language-partner-chinese.jpg" buttonName="chinese" /></div> </td>
                            <td><div className="language_partner_french_button"> <Button source="images/language-partner-french.jpg" buttonName="french" /></div> </td>
                        </tr>
                        <tr>
                            <td><div className="motorcycles_button"> <Button source="images/motorcycles.jpg" buttonName="motorcycles" /></div> </td>
                            <td><div className="esports_button"> <Button source="images/esports.jpg" spaceIsDeployed="true" buttonName="esports" /></div> </td>
                            <td><div className="memes_button"> <Button source="images/memes.jpg" buttonName="memes" /></div> </td>
                        </tr>
                    </tbody>
	    		</table>
    		</div>


    	);
    }


}




